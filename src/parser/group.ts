import Group from '../model/group';
import Style from '../model/style';
import { getName } from '../helpers/name';

const transferToGroup = (node: Element) => {
  const bcr = node.getBoundingClientRect();
  let x = bcr.left,
    y = bcr.top;

  const width = bcr.right - bcr.left;
  const height = bcr.bottom - bcr.top;

  const styles = getComputedStyle(node);
  const { opacity } = styles;

  const group = new Group({ x, y, width, height });
  const groupStyle = new Style();

  groupStyle.addOpacity(opacity);
  group.setStyle(groupStyle);

  // Set the group name to the node's name, unless there is a name provider in the options
  group.setName(getName(node.nodeName));

  return group;
};
export default transferToGroup;
