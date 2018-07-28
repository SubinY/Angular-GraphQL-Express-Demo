import Users from '../../../models/users';
import { project } from '../../projection/projection';

let updateUser = async (root: object, args: { id: string, username: string }, ctx: object, info: object) => {
  const proj = project(info);
  await Users.updateOne({ _id: args.id}, { $set: { username: args.username }}, proj);
  let result = await Users.findById(args.id, proj);
  return result;
};

export { updateUser };
