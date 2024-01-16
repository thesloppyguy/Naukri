import React from "react";
import { TreeView } from "@mui/x-tree-view/TreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";

const TreeSelect = () => {
  const [selectedNode, setSelectedNode] = React.useState("");

  const handleSelectChange = (event: any) => {
    setSelectedNode(event.target.value);
  };

  const handleTreeSelect = (event: any, nodeIds: any) => {
    setSelectedNode(nodeIds[0]);
  };

  return (
    <div>
      <FormControl>
        <InputLabel id="tree-select-label">Select Node</InputLabel>
        <Select
          labelId="tree-select-label"
          id="tree-select"
          value={selectedNode}
          onChange={handleSelectChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="node1">Node 1</MenuItem>
          <MenuItem value="node2">Node 2</MenuItem>
        </Select>
      </FormControl>
      <TreeView
        defaultCollapseIcon={<ChevronRightIcon />}
        defaultExpandIcon={<ExpandMoreIcon />}
        onNodeSelect={handleTreeSelect}
      >
        <TreeItem nodeId="node1" label="Node 1">
          <TreeItem nodeId="node1-1" label="Node 1-1" />
          <TreeItem nodeId="node1-2" label="Node 1-2" />
        </TreeItem>
        <TreeItem nodeId="node2" label="Node 2">
          <TreeItem nodeId="node2-1" label="Node 2-1" />
          <TreeItem nodeId="node2-2" label="Node 2-2" />
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default TreeSelect;
