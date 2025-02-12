/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */

package configservice

import (
	"context"

	client "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	configtypes "github.com/openorch/openorch/server/internal/services/config/types"
	usertypes "github.com/openorch/openorch/server/internal/services/user/types"
)

// this is called in the Start not in constructor to avoid import cycles
func (p *ConfigService) registerPermissions() error {
	ctx := context.Background()
	userSvc := p.clientFactory.Client(sdk.WithToken(p.token)).UserSvcAPI

	for _, permission := range configtypes.AdminPermissions {
		_, _, err := userSvc.UpsertPermission(ctx, permission.Id).
			RequestBody(client.UserSvcUpserPermissionRequest{
				Permission: &client.UserSvcPermission{
					Name:        client.PtrString(permission.Name),
					Description: client.PtrString(permission.Description),
				},
			}).
			Execute()
		if err != nil {
			return err
		}
	}

	for _, role := range []*usertypes.Role{
		usertypes.RoleAdmin,
	} {
		for _, permission := range configtypes.AdminPermissions {
			_, _, err := userSvc.AddPermissionToRole(ctx, role.Id, permission.Id).
				Execute()
			if err != nil {
				return err
			}
		}
	}

	return nil
}
