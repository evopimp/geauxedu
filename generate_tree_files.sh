#!/bin/bash

# Set the base directory
BASE_DIR=~/geauxedu

# Generate the tree for the base directory
tree "$BASE_DIR" > "$BASE_DIR/tree.txt"

# Function to generate tree files for each subdirectory
generate_tree_files() {
  local dir=$1
  for subdir in "$dir"/*/; do
    if [ -d "$subdir" ]; then
      local subdir_name=$(basename "$subdir")
      tree "$subdir" > "${subdir%/}/${subdir_name}_tree.txt"
      generate_tree_files "$subdir"
    fi
  done
}

# Generate tree files for each subdirectory
generate_tree_files "$BASE_DIR"