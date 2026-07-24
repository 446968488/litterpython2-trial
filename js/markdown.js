// 轻量 Markdown 渲染器（离线可用，无外部依赖）
window.MD = (function () {
  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function inline(s) {
    s = escapeHtml(s);
    s = s.replace(/`([^`]+)`/g, '<code class="md-inline">$1</code>');
    s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return s;
  }

  function render(md) {
    if (!md) return '';
    const lines = md.replace(/\r\n/g, '\n').split('\n');
    let html = '';
    let i = 0;
    let inCode = false;
    let codeBuf = [];
    let listType = null;
    let listBuf = [];

    function flushList() {
      if (listBuf.length) {
        html += '<' + listType + ' class="md-list">' + listBuf.join('') + '</' + listType + '>';
        listBuf = [];
        listType = null;
      }
    }

    while (i < lines.length) {
      const line = lines[i];

      // 代码块
      if (/^```/.test(line.trim())) {
        if (!inCode) { flushList(); inCode = true; codeBuf = []; i++; continue; }
        html += '<pre class="md-code"><code>' + escapeHtml(codeBuf.join('\n')) + '</code></pre>';
        inCode = false; i++; continue;
      }
      if (inCode) { codeBuf.push(line); i++; continue; }

      // 标题
      const h = line.match(/^(#{1,4})\s+(.*)$/);
      if (h) { flushList(); const lv = h[1].length; html += '<h' + lv + ' class="md-h md-h' + lv + '">' + inline(h[2]) + '</h' + lv + '>'; i++; continue; }

      // 引用
      const bq = line.match(/^>\s?(.*)$/);
      if (bq) { flushList(); html += '<blockquote class="md-quote">' + inline(bq[1]) + '</blockquote>'; i++; continue; }

      // 无序列表
      const ul = line.match(/^[-*]\s+(.*)$/);
      if (ul) { if (listType !== 'ul') { flushList(); listType = 'ul'; } listBuf.push('<li>' + inline(ul[1]) + '</li>'); i++; continue; }

      // 有序列表
      const ol = line.match(/^\d+\.\s+(.*)$/);
      if (ol) { if (listType !== 'ol') { flushList(); listType = 'ol'; } listBuf.push('<li>' + inline(ol[1]) + '</li>'); i++; continue; }

      // 空行
      if (line.trim() === '') { flushList(); i++; continue; }

      // 段落
      flushList();
      html += '<p class="md-p">' + inline(line) + '</p>';
      i++;
    }
    flushList();
    if (inCode) html += '<pre class="md-code"><code>' + escapeHtml(codeBuf.join('\n')) + '</code></pre>';
    return html;
  }

  return { render: render };
})();
