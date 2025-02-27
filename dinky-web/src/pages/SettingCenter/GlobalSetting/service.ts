/*
 *
 *  Licensed to the Apache Software Foundation (ASF) under one or more
 *  contributor license agreements.  See the NOTICE file distributed with
 *  this work for additional information regarding copyright ownership.
 *  The ASF licenses this file to You under the Apache License, Version 2.0
 *  (the "License"); you may not use this file except in compliance with
 *  the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

import { queryDataByParams } from '@/services/BusinessCrud';
import { API_CONSTANTS } from '@/services/endpoints';
import { SettingConfigKeyEnum } from '@/pages/SettingCenter/GlobalSetting/SettingOverView/constants';

export async function queryDsConfig() {
  return await queryDataByParams(API_CONSTANTS.SYSTEM_GET_ONE_TYPE_CONFIG, {
    type: SettingConfigKeyEnum.DOLPHIN_SCHEDULER.toLowerCase()
  });
}

export async function queryResourceConfig(keyword: string) {
  return await queryDataByParams(API_CONSTANTS.SYSTEM_GET_ONE_TYPE_CONFIG, { type: keyword });
}

export async function queryTaskOwnerLockingStrategy() {
  return await queryDataByParams(API_CONSTANTS.SYSTEM_GET_ONE_TYPE_CONFIG, {
    type: SettingConfigKeyEnum.ENV.toLowerCase()
  });
}
