<template>
  <k-space direction="vertical">
    <k-text>span</k-text>
    <k-text tag="p">This is a paragraph.</k-text>
    <k-text tag="b">Bold</k-text>
    <k-text tag="i">Italic</k-text>
    <k-text>
      This is
      <k-text tag="sub" size="small">subscript</k-text>
    </k-text>
    <k-text>
      This is
      <k-text tag="sup" size="small">superscript</k-text>
    </k-text>
    <k-text tag="ins">Inserted</k-text>
    <k-text tag="del">Deleted</k-text>
    <k-text tag="mark">Marked</k-text>
  </k-space>
</template>
