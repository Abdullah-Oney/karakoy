(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const wait = (ms) => new Promise(resolve => window.setTimeout(resolve, ms));

  function toast(message) {
    const node = $('.toast');
    if (!node) return;
    node.textContent = message;
    node.classList.add('show');
    window.clearTimeout(window.__gulluToastTimer);
    window.__gulluToastTimer = window.setTimeout(() => node.classList.remove('show'), 2600);
  }

  function readStore(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      return fallback;
    }
  }

  function writeStore(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      toast('Tarayıcı depolama alanına erişilemedi.');
      return false;
    }
  }

  /* -------------------- Ürün ve oyun görselleri -------------------- */
  function dessertSvg(type, extraClass = '') {
    const commonStart = `<svg class="${extraClass}" viewBox="0 0 120 100" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">`;
    const plate = `<ellipse cx="60" cy="78" rx="43" ry="10" fill="#b99a69" opacity=".18"/><ellipse cx="60" cy="72" rx="45" ry="13" fill="#f8efd9" stroke="#d7c49b" stroke-width="2"/><ellipse cx="60" cy="70" rx="37" ry="8" fill="#fffaf0"/>`;
    const nut = `<g fill="#638348"><ellipse cx="0" cy="0" rx="3.3" ry="1.8" transform="rotate(-25)"/><ellipse cx="8" cy="-4" rx="2.5" ry="1.5" transform="rotate(28 8 -4)"/><ellipse cx="-8" cy="-5" rx="2.7" ry="1.5" transform="rotate(-20 -8 -5)"/></g>`;
    let art = '';

    if (type === 'baklava' || type === 'walnut' || type === 'carrot' || type === 'fistik') {
      const fill = type === 'walnut' ? '#b4773d' : type === 'carrot' ? '#d99a35' : '#d6a044';
      const light = type === 'walnut' ? '#e5b36d' : '#f3cf82';
      art = `${plate}
        <g transform="translate(60 49) rotate(-8)">
          <path d="M-29 1 L0 -27 L29 1 L0 29 Z" fill="#9d672d" opacity=".23" transform="translate(0 4)"/>
          <path d="M-28 0 L0 -27 L28 0 L0 27 Z" fill="${fill}" stroke="#a56d2d" stroke-width="1.2"/>
          <path d="M-22 0 L0 -21 L22 0 L0 21 Z" fill="${light}" opacity=".85"/>
          <path d="M-16 0 L0 -15 L16 0 L0 15 Z" fill="${fill}" opacity=".75"/>
          <path d="M-29 0 L0 -28 L29 0" fill="none" stroke="#f8d991" stroke-width="2.2" opacity=".9"/>
          <path d="M-23 -1 L0 -23 L23 -1" fill="none" stroke="#fff0c3" stroke-width="1" opacity=".75"/>
          <g transform="translate(0 -1)">${nut}</g>
        </g>
        <g fill="#6b8746"><circle cx="27" cy="64" r="2"/><circle cx="91" cy="62" r="1.8"/><circle cx="84" cy="34" r="1.4"/></g>`;
    } else if (type === 'cold') {
      art = `${plate}<g transform="translate(60 48) rotate(-8)">
        <path d="M-31 -10 L24 -10 L32 15 L-25 17 Z" fill="#98785c" opacity=".3" transform="translate(0 5)"/>
        <path d="M-32 -17 L23 -17 L31 12 L-25 14 Z" fill="#765b4e" stroke="#5c4438" stroke-width="1"/>
        <path d="M-29 -20 L25 -20 L29 -11 L-27 -10 Z" fill="#694d40"/>
        <path d="M-27 -6 L27 -8 L29 -1 L-25 1 Z" fill="#f0ddc1"/>
        <path d="M-25 3 L29 1 L31 10 L-23 12 Z" fill="#d7a66f"/>
        <path d="M-27 -20 L25 -20" stroke="#96705b" stroke-width="2"/>
        <g fill="#6f8b4c"><ellipse cx="-10" cy="-18" rx="4" ry="2"/><ellipse cx="2" cy="-19" rx="3.5" ry="2"/><ellipse cx="13" cy="-18" rx="3" ry="1.8"/></g>
        <g fill="#dfc5a5" opacity=".85"><circle cx="-20" cy="-13" r="1.2"/><circle cx="3" cy="-13" r="1.1"/><circle cx="19" cy="-15" r="1.4"/></g>
      </g>`;
    } else if (type === 'kadayif') {
      art = `${plate}<g fill="none" stroke-linecap="round" stroke-width="4">
        <path d="M27 54 C20 29 48 24 55 44 C60 60 30 63 34 45 C39 23 73 28 77 48 C83 69 45 71 44 51 C43 35 83 30 88 52" stroke="#bd7e2e"/>
        <path d="M31 52 C39 37 46 37 52 51 C59 66 79 61 83 48" stroke="#e4b45f"/>
        <path d="M37 58 C41 45 58 39 67 54 C75 67 91 57 83 43" stroke="#f0cc7d"/>
        <path d="M38 48 C43 35 60 33 67 45 C73 58 58 66 51 54" stroke="#d79a40"/>
      </g><g fill="#66864a"><ellipse cx="60" cy="47" rx="4" ry="2"/><ellipse cx="67" cy="50" rx="3" ry="1.7"/><ellipse cx="54" cy="53" rx="3" ry="1.7"/></g>`;
    } else if (type === 'sobiyet') {
      art = `${plate}<g transform="translate(60 49) rotate(6)"><path d="M-31 19 L0 -24 L31 19 Q0 28 -31 19Z" fill="#b77a31" stroke="#8f5a27" stroke-width="1.2"/><path d="M-24 16 L0 -18 L24 16 Q0 22 -24 16Z" fill="#efc16f"/><path d="M-16 12 L0 -9 L16 12 Q0 16 -16 12Z" fill="#d79a40"/><path d="M-11 11 Q0 2 11 11" fill="none" stroke="#f4e3bc" stroke-width="4"/><g fill="#638348"><ellipse cx="-2" cy="5" rx="3.4" ry="1.7"/><ellipse cx="5" cy="7" rx="2.5" ry="1.5"/></g></g>`;
    } else if (type === 'lokum') {
      art = `${plate}<g transform="translate(60 50)"><g transform="rotate(-12 -20 0)"><rect x="-35" y="-10" width="23" height="22" rx="4" fill="#d58a83"/><path d="M-35 -2 H-12" stroke="#f4c2ae" stroke-width="3"/><circle cx="-24" cy="1" r="2" fill="#f8e3c5"/></g><g transform="rotate(8 8 0)"><rect x="-5" y="-15" width="26" height="25" rx="4" fill="#a9b88a"/><path d="M-5 -5 H21" stroke="#d9e2bb" stroke-width="3"/></g><rect x="9" y="5" width="22" height="19" rx="4" fill="#e4b66d"/><path d="M9 12 H31" stroke="#f7dfa8" stroke-width="3"/></g>`;
    } else if (type === 'tea') {
      art = `${plate}<g transform="translate(60 48)"><path d="M-17 -21 H17 L14 19 Q0 28 -14 19 Z" fill="#e8eef0" fill-opacity=".7" stroke="#a8b5ad" stroke-width="2"/><path d="M-13 -7 H13 L11 17 Q0 24 -11 17 Z" fill="#8e3e21"/><path d="M17 -10 Q33 -10 25 7 Q20 14 14 9" fill="none" stroke="#b6c0b8" stroke-width="4"/><path d="M-11 -20 H12" stroke="#fff" stroke-width="2" opacity=".8"/><ellipse cx="0" cy="-8" rx="12" ry="2" fill="#bb6440"/></g>`;
    } else if (type === 'coffee') {
      art = `${plate}<g transform="translate(60 47)"><ellipse cx="0" cy="-2" rx="24" ry="18" fill="#f4eee1" stroke="#cbb995" stroke-width="2"/><ellipse cx="0" cy="-4" rx="17" ry="12" fill="#56372a"/><ellipse cx="0" cy="-8" rx="13" ry="7" fill="#8e6047"/><path d="M18 -3 Q39 -4 28 12 Q23 17 17 10" fill="none" stroke="#cbb995" stroke-width="4"/><path d="M-10 18 H10" stroke="#a98c61" stroke-width="3" stroke-linecap="round"/></g>`;
    } else {
      art = `${plate}<path d="M30 55 L60 27 L90 55 L60 82 Z" fill="#d6a044" stroke="#a56d2d"/>`;
    }
    return `${commonStart}${art}</svg>`;
  }

  /* -------------------- Menü sayfası -------------------- */
  const productNodes = $$('.product-card');
  if (productNodes.length) {
    const tabs = $$('#categoryTabs .tab');
    const search = $('#menuSearch');
    function filterProducts() {
      const active = $('#categoryTabs .tab.active')?.dataset.filter || 'all';
      const query = (search?.value || '').trim().toLocaleLowerCase('tr-TR');
      let shown = 0;
      productNodes.forEach(card => {
        const categoryOk = active === 'all' || card.dataset.category === active;
        const content = `${card.dataset.name} ${card.textContent}`.toLocaleLowerCase('tr-TR');
        const visible = categoryOk && content.includes(query);
        card.hidden = !visible;
        if (visible) shown += 1;
      });
      const empty = $('#noMenuResults');
      if (empty) empty.hidden = shown !== 0;
    }
    tabs.forEach(tab => tab.addEventListener('click', () => {
      tabs.forEach(item => item.classList.remove('active'));
      tab.classList.add('active');
      filterProducts();
    }));
    search?.addEventListener('input', filterProducts);
    $$('.product-art[data-art]').forEach(node => { node.innerHTML = dessertSvg(node.dataset.art); });
  }

  /* -------------------- Tatlı Crush: gerçek sürükleme + eşleştirme -------------------- */
  const matchGrid = $('#matchGrid');
  if (matchGrid) {
    const sweets = ['baklava', 'cold', 'kadayif', 'sobiyet', 'walnut', 'lokum'];
    const size = 7;
    let board = [];
    let selected = -1;
    let score = 0;
    let moves = 25;
    let busy = false;
    let dragInfo = null;
    const scoreNode = $('#matchScore');
    const movesNode = $('#matchMoves');
    const messageNode = $('#matchMessage');

    const randomSweet = () => sweets[Math.floor(Math.random() * sweets.length)];
    const same = (a, b) => a !== null && b !== null && a === b;
    const adjacent = (a, b) => Math.abs(Math.floor(a / size) - Math.floor(b / size)) + Math.abs((a % size) - (b % size)) === 1;

    function setMessage(message) {
      if (messageNode) messageNode.textContent = message;
    }

    function updateStats() {
      if (scoreNode) scoreNode.textContent = String(score);
      if (movesNode) movesNode.textContent = String(moves);
    }

    function hasImmediateMatch(index, value) {
      const row = Math.floor(index / size);
      const col = index % size;
      if (col >= 2 && board[index - 1] === value && board[index - 2] === value) return true;
      if (row >= 2 && board[index - size] === value && board[index - size * 2] === value) return true;
      return false;
    }

    function scanMatches() {
      const hits = new Set();
      for (let row = 0; row < size; row++) {
        let start = 0;
        for (let col = 1; col <= size; col++) {
          const current = col < size ? board[row * size + col] : null;
          const first = board[row * size + start];
          if (col < size && same(current, first)) continue;
          if (col - start >= 3 && first !== null) {
            for (let x = start; x < col; x++) hits.add(row * size + x);
          }
          start = col;
        }
      }
      for (let col = 0; col < size; col++) {
        let start = 0;
        for (let row = 1; row <= size; row++) {
          const current = row < size ? board[row * size + col] : null;
          const first = board[start * size + col];
          if (row < size && same(current, first)) continue;
          if (row - start >= 3 && first !== null) {
            for (let y = start; y < row; y++) hits.add(y * size + col);
          }
          start = row;
        }
      }
      return [...hits];
    }

    function renderBoard() {
      matchGrid.innerHTML = '';
      board.forEach((type, index) => {
        const tile = document.createElement('button');
        tile.type = 'button';
        tile.className = `sweet-tile${selected === index ? ' selected' : ''}`;
        tile.dataset.index = String(index);
        tile.setAttribute('aria-label', `${type === 'cold' ? 'Soğuk baklava' : type === 'kadayif' ? 'Kadayıf' : type === 'sobiyet' ? 'Şöbiyet' : type === 'walnut' ? 'Cevizli baklava' : type === 'lokum' ? 'Lokum' : 'Fıstıklı baklava'}; ${index + 1}. kare`);
        tile.innerHTML = dessertSvg(type);

        tile.addEventListener('pointerdown', event => {
          if (busy || moves <= 0 || event.button > 0) return;
          event.preventDefault();
          dragInfo = { index, startX: event.clientX, startY: event.clientY, moved: false, pointerId: event.pointerId };
          tile.classList.add('pressed');
          try { tile.setPointerCapture(event.pointerId); } catch (error) { /* capture is optional */ }
        });

        tile.addEventListener('pointermove', event => {
          if (!dragInfo || dragInfo.index !== index) return;
          const dx = event.clientX - dragInfo.startX;
          const dy = event.clientY - dragInfo.startY;
          if (Math.abs(dx) + Math.abs(dy) > 7) dragInfo.moved = true;
          if (dragInfo.moved) {
            tile.classList.add('dragging');
            tile.style.setProperty('--drag-x', `${dx}px`);
            tile.style.setProperty('--drag-y', `${dy}px`);
          }
        });

        tile.addEventListener('pointerup', event => {
          if (!dragInfo || dragInfo.index !== index) return;
          const info = dragInfo;
          dragInfo = null;
          tile.classList.remove('pressed', 'dragging');
          tile.style.removeProperty('--drag-x');
          tile.style.removeProperty('--drag-y');
          if (info.moved) {
            const underPointer = document.elementFromPoint(event.clientX, event.clientY)?.closest('.sweet-tile');
            const targetIndex = underPointer ? Number(underPointer.dataset.index) : -1;
            selected = -1;
            if (targetIndex >= 0 && targetIndex !== index && adjacent(index, targetIndex)) {
              void trySwap(index, targetIndex);
            } else {
              setMessage('Bir tatlıyı yalnızca yanındaki kareyle değiştirebilirsin.');
              renderBoard();
            }
          } else {
            handleTap(index);
          }
        });

        tile.addEventListener('pointercancel', () => {
          dragInfo = null;
          tile.classList.remove('pressed', 'dragging');
          tile.style.removeProperty('--drag-x');
          tile.style.removeProperty('--drag-y');
        });
        matchGrid.appendChild(tile);
      });
    }

    function handleTap(index) {
      if (busy || moves <= 0) return;
      if (selected < 0) {
        selected = index;
        setMessage('Şimdi yanındaki bir tatlıya dokun.');
        renderBoard();
        return;
      }
      if (selected === index) {
        selected = -1;
        renderBoard();
        setMessage('Seçim kaldırıldı.');
        return;
      }
      if (!adjacent(selected, index)) {
        selected = index;
        renderBoard();
        setMessage('Yan yana olan iki tatlıyı seçmelisin.');
        return;
      }
      const first = selected;
      selected = -1;
      void trySwap(first, index);
    }

    async function trySwap(first, second) {
      if (busy || moves <= 0 || !adjacent(first, second)) return;
      busy = true;
      [board[first], board[second]] = [board[second], board[first]];
      renderBoard();
      await wait(110);
      const hits = scanMatches();
      if (!hits.length) {
        [board[first], board[second]] = [board[second], board[first]];
        renderBoard();
        setMessage('Bu değişiklik eşleşme oluşturmadı. Başka bir tatlı dene.');
        busy = false;
        return;
      }
      moves -= 1;
      updateStats();
      await resolveMatches();
      if (score >= 600) setMessage('Harika! 600 puan hedefine ulaştın. İstersen devam edebilirsin.');
      else if (moves <= 0) setMessage(`Oyun tamamlandı · ${score} puan. Yeniden başlamak için ↻ düğmesine dokun.`);
      else setMessage('Çok iyi! Yeni eşleşmeler için devam et.');
      busy = false;
      renderBoard();
    }

    async function resolveMatches() {
      let cascade = 0;
      let hits = scanMatches();
      while (hits.length && cascade < 12) {
        cascade += 1;
        score += hits.length * 10 * (cascade > 1 ? cascade : 1);
        hits.forEach(index => {
          const node = $(`.sweet-tile[data-index="${index}"]`, matchGrid);
          node?.classList.add('popping');
        });
        updateStats();
        setMessage(cascade > 1 ? `Zincirleme eşleşme! ${hits.length} tatlı daha.` : `${hits.length} tatlı eşleşti!`);
        await wait(190);
        hits.forEach(index => { board[index] = null; });
        for (let col = 0; col < size; col++) {
          let writeRow = size - 1;
          for (let row = size - 1; row >= 0; row--) {
            const index = row * size + col;
            if (board[index] !== null) {
              board[writeRow * size + col] = board[index];
              writeRow -= 1;
            }
          }
          for (let row = writeRow; row >= 0; row--) board[row * size + col] = randomSweet();
        }
        selected = -1;
        renderBoard();
        await wait(90);
        hits = scanMatches();
      }
      updateStats();
    }

    function startMatchGame() {
      score = 0;
      moves = 25;
      selected = -1;
      busy = false;
      dragInfo = null;
      board = [];
      for (let i = 0; i < size * size; i++) {
        let value = randomSweet();
        let attempts = 0;
        while (hasImmediateMatch(i, value) && attempts < 20) {
          value = randomSweet();
          attempts += 1;
        }
        board.push(value);
      }
      updateStats();
      renderBoard();
      setMessage('Bir tatlıyı sürükleyip yanındakiyle değiştir.');
    }

    $('#matchRestart')?.addEventListener('click', startMatchGame);
    startMatchGame();
  }

  /* -------------------- Arkadaş çarkı -------------------- */
  const wheelDisc = $('#wheelDisc');
  if (wheelDisc) {
    const input = $('#playerInput');
    const listNode = $('#playerList');
    const countNode = $('#participantCount');
    const spinButton = $('#spinWheel');
    const resultNode = $('#wheelResult');
    const labelsNode = $('#wheelLabels');
    let players = [];
    let rotation = 0;
    let spinning = false;
    const colors = ['#1c5038', '#d3a64a', '#8b4938', '#42634a', '#b77b3f', '#294c3a', '#6a7651', '#a65f47'];

    function drawWheel() {
      const count = players.length;
      if (!count) {
        wheelDisc.style.background = 'conic-gradient(from -90deg,#1c5038 0 50%,#d3a64a 50% 100%)';
        labelsNode.innerHTML = '';
        countNode.textContent = '0 kişi';
        spinButton.disabled = true;
        return;
      }
      const segment = 360 / count;
      const stops = [];
      players.forEach((name, index) => {
        stops.push(`${colors[index % colors.length]} ${index * segment}deg ${(index + 1) * segment}deg`);
      });
      wheelDisc.style.background = `conic-gradient(from -90deg,${stops.join(',')})`;
      labelsNode.innerHTML = '';
      players.forEach((name, index) => {
        const label = document.createElement('span');
        label.className = 'wheel-label';
        label.textContent = name;
        label.title = name;
        const middle = index * segment + segment / 2;
        label.style.transform = `rotate(${middle}deg) translateY(-${count <= 4 ? 103 : count <= 6 ? 108 : 111}px) rotate(90deg)`;
        labelsNode.appendChild(label);
      });
      countNode.textContent = `${count} kişi`;
      spinButton.disabled = count < 2 || spinning;
    }

    function renderPlayers() {
      listNode.innerHTML = '';
      if (!players.length) {
        const empty = document.createElement('span');
        empty.className = 'empty-player-note';
        empty.textContent = 'Henüz isim eklenmedi.';
        listNode.appendChild(empty);
      } else {
        players.forEach((name, index) => {
          const chip = document.createElement('span');
          chip.className = 'player-chip';
          const label = document.createElement('span');
          label.textContent = name;
          const remove = document.createElement('button');
          remove.type = 'button';
          remove.textContent = '×';
          remove.setAttribute('aria-label', `${name} ismini kaldır`);
          remove.addEventListener('click', () => {
            if (spinning) return;
            players.splice(index, 1);
            resetWheelResult();
            renderPlayers();
          });
          chip.append(label, remove);
          listNode.appendChild(chip);
        });
      }
      drawWheel();
    }

    function resetWheelResult() {
      rotation = 0;
      wheelDisc.style.transition = 'none';
      wheelDisc.style.transform = 'rotate(0deg)';
      void wheelDisc.offsetWidth;
      wheelDisc.style.transition = '';
      resultNode.hidden = true;
      resultNode.innerHTML = '';
    }

    function addPlayer() {
      if (spinning) {
        toast('Çark durduktan sonra isim ekleyebilirsin.');
        return;
      }
      const name = (input.value || '').trim().replace(/\s+/g, ' ');
      if (!name) {
        toast('Önce bir isim yaz.');
        input.focus();
        return;
      }
      if (players.some(player => player.toLocaleLowerCase('tr-TR') === name.toLocaleLowerCase('tr-TR'))) {
        toast('Bu isim zaten listede.');
        input.select();
        return;
      }
      if (players.length >= 8) {
        toast('Çarka en fazla 8 kişi ekleyebilirsin.');
        return;
      }
      players.push(name);
      input.value = '';
      resetWheelResult();
      renderPlayers();
      input.focus();
    }

    $('#addPlayer')?.addEventListener('click', addPlayer);
    input?.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
        event.preventDefault();
        addPlayer();
      }
    });
    $('#wheelQuestion')?.addEventListener('change', resetWheelResult);

    spinButton?.addEventListener('click', () => {
      if (players.length < 2 || spinning) return;
      const winnerIndex = Math.floor(Math.random() * players.length);
      const segment = 360 / players.length;
      const centerFromTop = winnerIndex * segment + segment / 2;
      const currentMod = ((rotation % 360) + 360) % 360;
      const delta = (360 - ((centerFromTop + currentMod) % 360)) % 360;
      rotation += delta + 360 * 5;
      spinning = true;
      spinButton.disabled = true;
      const questionForThisSpin = $('#wheelQuestion')?.value || 'Bu turun kazananı';
      const questionSelect = $('#wheelQuestion');
      if (questionSelect) questionSelect.disabled = true;
      const addButton = $('#addPlayer');
      if (addButton) addButton.disabled = true;
      if (input) input.disabled = true;
      resultNode.hidden = true;
      wheelDisc.style.transform = `rotate(${rotation}deg)`;
      const finish = () => {
        if (!spinning) return;
        spinning = false;
        const winner = players[winnerIndex];
        resultNode.innerHTML = `<span>${questionForThisSpin.toLocaleUpperCase('tr-TR')}</span><strong>${escapeHtml(winner)} 🎉</strong><small>Çark kararını verdi. Afiyet olsun!</small>`;
        resultNode.hidden = false;
        spinButton.disabled = players.length < 2;
        if (questionSelect) questionSelect.disabled = false;
        if (addButton) addButton.disabled = false;
        if (input) input.disabled = false;
      };
      const onEnd = event => {
        if (event.propertyName !== 'transform') return;
        wheelDisc.removeEventListener('transitionend', onEnd);
        finish();
      };
      wheelDisc.addEventListener('transitionend', onEnd);
      window.setTimeout(() => {
        if (spinning) {
          wheelDisc.removeEventListener('transitionend', onEnd);
          finish();
        }
      }, 5200);
    });

    renderPlayers();
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]);
  }

  /* -------------------- Güllü Kulübü sadakat kartı -------------------- */
  const loyaltyForm = $('#loyaltyForm');
  if (loyaltyForm) {
    const input = $('#customerId');
    const card = $('#loyaltyCard');
    const explanation = $('#loyaltyExplain');
    const lastId = readStore('gulluLastCustomerId', '');
    if (lastId && input) input.value = lastId;

    function showLoyaltyCard(id) {
      const normalizedId = id.trim().toLocaleUpperCase('tr-TR');
      if (!normalizedId) {
        toast('Müşteri numaranı gir.');
        return;
      }
      const key = `gulluLoyalty:${normalizedId}`;
      let record = readStore(key, null);
      if (!record || typeof record.steps !== 'number') {
        record = { steps: 2, createdAt: new Date().toISOString() };
        writeStore(key, record);
      }
      record.steps = Math.max(2, Math.min(8, record.steps));
      writeStore(key, record);
      writeStore('gulluLastCustomerId', normalizedId);
      $('#loyaltyCustomerName').textContent = normalizedId;
      $('#stampCount').textContent = String(record.steps);
      const left = Math.max(0, 8 - record.steps);
      $('#remainingVisits').textContent = left === 0 ? 'Ödülün hazır!' : `Ödüle ${left} ziyaret kaldı`;
      const grid = $('#stampGrid');
      grid.innerHTML = '';
      for (let step = 0; step < 8; step++) {
        const stamp = document.createElement('div');
        stamp.className = `stamp-step${step < record.steps ? ' filled' : ''}`;
        stamp.setAttribute('aria-label', `${step + 1}. adım${step < record.steps ? ' tamamlandı' : ' bekliyor'}`);
        const text = document.createElement('span');
        text.textContent = step < 2 ? '1843' : step < record.steps ? '✓' : String(step + 1).padStart(2, '0');
        stamp.appendChild(text);
        grid.appendChild(stamp);
      }
      card.hidden = false;
      explanation.hidden = false;
    }

    loyaltyForm.addEventListener('submit', event => {
      event.preventDefault();
      showLoyaltyCard(input.value);
    });
    if (lastId) showLoyaltyCard(lastId);
  }

  /* -------------------- Yemek değerlendirmesi + sorun bildir -------------------- */
  const mealForm = $('#mealFeedbackForm');
  if (mealForm) {
    let selectedScore = 0;
    const scoreLabels = ['', 'Beklentimin altında', 'Geliştirilebilir', 'Fena değildi', 'Çok iyiydi', 'Harikaydı!'];
    $$('#ratingStars button').forEach(button => {
      button.addEventListener('click', () => {
        selectedScore = Number(button.dataset.score);
        $$('#ratingStars button').forEach(item => item.classList.toggle('active', Number(item.dataset.score) <= selectedScore));
        $('#ratingCaption').textContent = scoreLabels[selectedScore];
      });
    });
    $$('#mealTopics button').forEach(button => button.addEventListener('click', () => button.classList.toggle('active')));

    mealForm.addEventListener('submit', event => {
      event.preventDefault();
      const message = ($('#mealMessage').value || '').trim();
      const topics = $$('#mealTopics button.active').map(button => button.textContent.trim());
      if (!selectedScore && !message && !topics.length) {
        toast('Önce puan ver veya birkaç kelimeyle görüşünü yaz.');
        return;
      }
      const records = readStore('gulluMealFeedback', []);
      records.push({ score: selectedScore, topics, message, createdAt: new Date().toISOString() });
      if (writeStore('gulluMealFeedback', records)) {
        mealForm.reset();
        selectedScore = 0;
        $$('#ratingStars button').forEach(button => button.classList.remove('active'));
        $$('#mealTopics button').forEach(button => button.classList.remove('active'));
        $('#ratingCaption').textContent = 'Puan vermek için yıldızlara dokun.';
        toast('Teşekkür ederiz. Görüşün bu cihazda demo kaydı olarak saklandı.');
      }
    });
  }

  const problemForm = $('#problemForm');
  if (problemForm) {
    problemForm.addEventListener('submit', event => {
      event.preventDefault();
      const category = ($('#problemType').value || '').trim();
      const message = ($('#problemMessage').value || '').trim();
      if (!category) {
        toast('Lütfen sorun konusunu seç.');
        $('#problemType').focus();
        return;
      }
      if (!message) {
        toast('Mesaj alanını doldur.');
        $('#problemMessage').focus();
        return;
      }
      const records = readStore('gulluProblemReports', []);
      records.push({ category, message, createdAt: new Date().toISOString() });
      if (writeStore('gulluProblemReports', records)) {
        problemForm.reset();
        toast('Sorun bildirimin demo olarak bu cihazda saklandı.');
      }
    });
  }

  /* -------------------- Oyun sekmeleri -------------------- */
  const gameTabs = $$('.game-tab');
  if (gameTabs.length) {
    gameTabs.forEach(tab => tab.addEventListener('click', () => {
      const selected = tab.dataset.gameMode;
      gameTabs.forEach(item => {
        const active = item === tab;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      $$('.game-panel').forEach(panel => {
        const active = panel.id === `mode-${selected}`;
        panel.classList.toggle('active', active);
        panel.hidden = !active;
      });
    }));
  }
})();
