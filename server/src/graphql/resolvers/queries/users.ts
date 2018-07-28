import Users from '../../../models/users';
import { project } from '../../projection/projection';

let user = async (root: object, args: { id: string }, ctx: object, info: object) => {
  const proj = project(info);
  let result = await Users.findById(args.id, proj);
  return result;
};

let users = async (root: object, args: { id: string }, ctx: object, info: object) => {
  const proj = project(info);
  let result = await Users.find({}, proj);
  return result;
};

export { user, users };
