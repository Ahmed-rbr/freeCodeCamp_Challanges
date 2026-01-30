// Given the string of a valid unordered list in Markdown, return the equivalent HTML string.

// An unordered list consists of one or more list items. A valid list item appears on its own line and:

// Starts with a dash ("-"), followed by
// At least one space, and then
// The list item text.
// The list is given as a single string with new lines separated by the newline character ("\n"). Do not include the newline characters in the item text.

// Wrap each list item in HTML li tags, and the whole list of items in ul tags.

// For example, given "- Item A\n- Item B", return "<ul><li>Item A</li><li>Item B</li></ul>".
const parseUnorderedList = (markdown) => {
  markdown = markdown
    .split("\n")
    .map((mark) => {
      mark = mark.replace("- ", "");
      return (mark = `<li>${mark.trim()}</li>`);
    })
    .join("");

  markdown = `<ul>${markdown.trim()}</ul>`;
  return markdown;
};

// 1. parseUnorderedList("- Item A\n- Item B") should return "<ul><li>Item A</li><li>Item B</li></ul>".
// 2. parseUnorderedList("-  JavaScript\n-  Python") should return "<ul><li>JavaScript</li><li>Python</li></ul>".
