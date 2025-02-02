/*
 * @Author: sunhaolin@hotoa.com
 * @Date: 2022-06-20 19:02:47
 * @LastEditors: baozhoutao@steedos.com
 * @LastEditTime: 2022-12-06 09:56:31
 * @Description: 
 */

export const BASIC_TYPE_MAPPING = {
    'text': 'String',
    'textarea': 'String',
    'html': 'String',
    'url': 'String',
    'email': 'String',
    'date': 'Date',
    'datetime': 'Date',
    'time': 'Date',
    'number': 'Float',
    'currency': 'Float',
    'boolean': 'Boolean'
};
export const EXPAND_SUFFIX = '__expand';
export const DISPLAY_PREFIX = '_display';
export const UI_PREFIX = '_ui';
export const RELATED_PREFIX = '_related';
export const GRAPHQL_ACTION_PREFIX = 'graphql_';
export const PERMISSIONS_PREFIX = '_permissions';