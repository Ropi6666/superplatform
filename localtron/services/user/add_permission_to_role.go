/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 *
 * For commercial use, a separate license must be obtained by purchasing from The Authors.
 * For commercial licensing inquiries, please contact The Authors listed in the AUTHORS file.
 */
package userservice

import (
	"fmt"
)

func (s *UserService) AddPermissionToRole(roleId, permissionId string) error {
	role, found := s.rolesMem.FindById(roleId)
	if !found {
		return fmt.Errorf("Cannot find role %v", roleId)
	}
	_, found = s.permissionsMem.FindById(permissionId)
	if !found {
		return fmt.Errorf("Cannot find permission %v", permissionId)
	}

	exists := false
	for _, v := range role.PermissionIds {
		if v == permissionId {
			exists = true
		}
	}

	if exists {
		return nil
	}

	role.PermissionIds = append(role.PermissionIds, permissionId)
	s.permissionsFile.MarkChanged()

	return nil
}