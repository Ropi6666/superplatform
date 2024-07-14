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

package nodetypes

import (
	usertypes "github.com/singulatron/singulatron/localtron/services/user/types"
)

var PermissionNodeCreate = usertypes.Permission{
	Id:   "node.create",
	Name: "Node Create",
}

var PermissionNodeView = usertypes.Permission{
	Id:   "node.view",
	Name: "Node View",
}

var PermissionNodeEdit = usertypes.Permission{
	Id:   "node.edit",
	Name: "Node Edit",
}

var PermissionNodeDelete = usertypes.Permission{
	Id:   "node.delete",
	Name: "Node Delete",
}

var PermissionNodeStream = usertypes.Permission{
	Id:   "node.stream",
	Name: "Node Stream",
}

var NodePermissions = []usertypes.Permission{
	PermissionNodeCreate,
	PermissionNodeView,
	PermissionNodeEdit,
	PermissionNodeDelete,
	PermissionNodeStream,
}