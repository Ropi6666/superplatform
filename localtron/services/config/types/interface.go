/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package configtypes

import (
	firehosetypes "github.com/singulatron/singulatron/localtron/services/firehose/types"
	usertypes "github.com/singulatron/singulatron/localtron/services/user/types"
)

type ConfigServiceI interface {
	GetConfig() (Config, error)
	GetConfigDirectory() string
	SetEventCallback(f func(firehosetypes.Event))
	Start() error
	SaveConfig(config Config) error
	SetUpsertPermissionFunc(f func(id, name, description string) (*usertypes.Permission, error))
	SetAddPermissionToRoleFunc(f func(roleId, permissionId string) error)
}