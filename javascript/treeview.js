// ---------------------------------------------
// --- Name:    Easy DHTML Treeview           --
// --- Author:  D.D. de Kerf                  --
// --- Adapted: Dieter Hametner		      --
// --- Version: 0.2          Date: 13-6-2001  --
// ---------------------------------------------

function findSibling(node, name)
{
	while ((node.nextSibling.nodeType != Node.ELEMENT_NODE)
	       || (node.nextSibling.nodeName != name)) {
		node = node.nextSibling;
	}
	if (node.nextSibling.nodeName == name)
		return node.nextSibling;

	return null;
}

function findImageNode(node, className)
{
	for (var idx = 0; idx < node.childNodes.length; idx++) {
		var n = node.childNodes.item(idx);
		if ((n.nodeType == Node.ELEMENT_NODE) && (n.nodeName == "IMG")) {
			attr = n.getAttributeNode("class");
			if ((attr != null) && (attr.nodeValue == className)) {
				return n;
			}
		}
	}
	return null;
}

function setImages(node, expand, folder)
{
	// Change the image (if there is an image)
	if (node.childNodes.length > 0)
	{
		expandNode = findImageNode(node, "recording_expander");
		if (expandNode != null)
			expandNode.src = expand;
		folderNode = findImageNode(node, "recording_folder");
		if (folderNode != null)
			folderNode.src = folder;
	}
}

function Toggle(node)
{
	// Unfold the branch if it isn't visible
	sibling = findSibling(node, "UL");
	if (sibling == null)
		return;

	if (sibling.style.display == 'none')
	{
		setImages(node, "minus.png", "folder_open.png");
		sibling.style.display = 'block';
	}
	// Collapse the branch if it IS visible
	else
	{
		setImages(node, "plus.png", "folder_closed.png");
		sibling.style.display = 'none';
	}
}