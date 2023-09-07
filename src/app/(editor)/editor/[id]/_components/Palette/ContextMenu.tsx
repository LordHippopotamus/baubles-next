import { Menu, MenuItem } from "@mui/material";
import { useContextMenu } from "./contextMenuStore";
import { usePaletteStore } from "@editor/_hooks/paletteStore";
import { usePickColorModal } from "./pickColorModalStore";

const ContextMenu = () => {
  const contextMenu = useContextMenu((state) => state.contextMenu);
  const closeContextMenu = useContextMenu((state) => state.closeContextMenu);

  const selectColor = usePaletteStore((state) => state.selectColor);
  const openPickColorModal = usePickColorModal(
    (state) => state.openPickColorModal
  );
  const deleteColor = usePaletteStore((state) => state.deleteColor);

  const handleSelectColor = () => {
    contextMenu && selectColor(contextMenu.colorId);
    closeContextMenu();
  };

  const handleEditColor = () => {
    contextMenu && openPickColorModal(contextMenu.colorId);
    closeContextMenu();
  };

  const handleDeleteColor = () => {
    contextMenu && deleteColor(contextMenu.colorId);
    closeContextMenu();
  };

  return (
    <Menu
      open={!!contextMenu}
      onClose={closeContextMenu}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu
          ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
          : undefined
      }
    >
      <MenuItem onClick={handleSelectColor}>Select</MenuItem>
      <MenuItem onClick={handleEditColor}>Edit</MenuItem>
      <MenuItem onClick={handleDeleteColor}>Delete</MenuItem>
    </Menu>
  );
};

export default ContextMenu;
