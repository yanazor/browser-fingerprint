import sqlite3
import pandas as pd
from scipy.stats import entropy


def ent(data):
    p_data = data.value_counts(normalize=True) / len(data)  # calculates the probabilities
    entr = entropy(p_data)  # input probabilities to get the entropy
    return entr


def calc_entropy():
    cnx = sqlite3.connect('fingerprints.s3db')

    df = pd.read_sql_query("SELECT * FROM users", cnx)
    del df['userid']
    d = dict()
    for col in df.columns.tolist():
        d[col] = ent(df[col])

    sorted_dict = {}
    sorted_keys = sorted(d, reverse=True, key=d.get)  # [1, 3, 2]

    for w in sorted_keys:
        sorted_dict[w] = d[w]

    return sorted_dict


def information_gain(members, split):
    '''
    Measures the reduction in entropy after the split
    :param v: Pandas Series of the members
    :param split:
    :return:
    '''
    entropy_before = entropy(members.value_counts(normalize=True))
    split.name = 'split'
    members.name = 'members'
    grouped_distrib = members.groupby(split) \
        .value_counts(normalize=True) \
        .reset_index(name='count') \
        .pivot_table(index='split', columns='members', values='count').fillna(0)
    entropy_after = entropy(grouped_distrib, axis=1)
    entropy_after *= split.value_counts(sort=False, normalize=True)
    return entropy_before - entropy_after.sum()


def list_of_gain(d):
    cnx = sqlite3.connect('fingerprints.s3db')
    df = pd.read_sql_query("SELECT * FROM users", cnx)
    df['donottrack'] = df['donottrack'].fillna(value=0)
    del df['userid']
    sort_list = []
    for i in d.keys():
        sort_list.append(i)
    gain = {}
    for i in range(len(sort_list)):
        if i == 0:
            gain[sort_list[i]] = information_gain(df[sort_list[i]], df[sort_list[i + 1]])
        else:
            gain[sort_list[i]] = information_gain(df[sort_list[i]], df[sort_list[0]])

    return gain
