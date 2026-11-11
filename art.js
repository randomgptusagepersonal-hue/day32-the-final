/* =====================================================================
   DAY 32: THE DRAWINGS. The whole shop is one picture, 320 wide x 100 high,
   so every number below is in "shop units" (1 unit = 1% of screen height).
   ===================================================================== */
(() => {
const R = (a, b, s) => { let x = Math.sin(s * 999.7) * 10000; return a + (x - Math.floor(x)) * (b - a); };

/* little bits used everywhere */
const star = (x, y, r, fill = '#FFF4C9', cls = 'tw', d = 0) => `<g transform="translate(${x} ${y}) scale(${r})"><path class="${cls}" style="animation-delay:${d}s" d="M0-1 .28-.28 1 0 .28.28 0 1-.28.28-1 0-.28-.28Z" fill="${fill}"/></g>`;
const crystal = (x, y, s, c1 = '#D9C8FF', c2 = '#B39BF0') => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0-4 1.600-1 1 3-1 3-1.600-1Z" fill="${c1}"/><path d="M0-4 1.600-1 1 3 0 3Z" fill="${c2}"/><path d="M0-4-.4-.6 0 3" stroke="#fff" stroke-width=".25" opacity=".7" fill="none"/></g>`;
const flame = (x, y, s = 1, cls = 'flick') => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse class="halo" cx="0" cy="-1" rx="3.400" ry="3.400" fill="url(#gWarm)"/><path class="${cls}" d="M0-2.600C.9-1.200 1-.4 0 0-1-.4-.9-1.200 0-2.600Z" fill="#FFD27A"/><path d="M0-1.600C.4-.9.4-.4 0-.2-.4-.4-.4-.9 0-1.600Z" fill="#FFF6D8"/></g>`;
const bottle = (x, y, kind, liquid, s = 1, bub = true) => {
  const shapes = {
    round: `<path d="M-1.300-7h2.600v2.600c2.600 1 3.800 2.800 3.800 5.100 0 3.100-2.600 5.300-5.100 5.300s-5.100-2.200-5.100-5.300c0-2.300 1.200-4.100 3.800-5.100Z"/>`,
    tall: `<path d="M-1-9h2v3.200c1.600.8 2.200 1.800 2.200 3.100V5H-3.200V-2.700c0-1.300.6-2.300 2.200-3.100Z"/>`,
    flask: `<path d="M-1.100-8h2.200v4.400l3.600 7.400c.5 1-.2 2.200-1.300 2.200H-3.400c-1.100 0-1.800-1.200-1.300-2.200l3.600-7.400Z"/>`,
    vial: `<path d="M-1.200-9h2.400V3.400a1.200 1.200 0 0 1-2.400 0Z"/>`,
    jar: `<path d="M-3.400-5h6.800v1.200c.8.4 1.200 1 1.200 1.800V4.300c0 .5-.4.9-.9.9H-4.300c-.5 0-.9-.4-.9-.9V-2c0-.8.4-1.400 1.200-1.800Z"/>`,
    heart: `<path d="M-1-7h2v2.200c3.400.2 4.600 2.600 3.600 4.700C3.800 1.600 1.600 3.600 0 5-1.600 3.600-3.800 1.600-4.600-.1c-1-2.100.2-4.500 3.600-4.700Z"/>`,
  };
  const p = shapes[kind] || shapes.round;
  const bubbles = bub ? [0, 1, 2].map(i => `<circle class="bub" style="animation-delay:${(-i * .9 - R(0, 1, x + i)).toFixed(2)}s" cx="${(i - 1) * 1}" cy="2" r=".45" fill="#fff" opacity=".8"/>`).join('') : '';
  return `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="7" ry="7" fill="${liquid}" opacity=".22" class="halo"/><g fill="${liquid}" opacity=".9">${p}</g><g fill="none" stroke="#fff" stroke-width=".35" opacity=".75">${p}</g>${bubbles}<path d="M-1.700-3.500q-1 2.400-.4 5.400" stroke="#fff" stroke-width=".5" opacity=".55" fill="none" stroke-linecap="round"/><rect x="-1.400" y="${kind === 'jar' ? -6.400 : kind === 'tall' || kind === 'vial' ? -10.300 : -8.300}" width="2.800" height="1.600" rx=".4" fill="#9B7458"/></g>`;
};
const book = (x, y, w, h, c, tilt = 0) => `<g transform="translate(${x} ${y}) rotate(${tilt})"><rect x="0" y="${-h}" width="${w}" height="${h}" rx=".3" fill="${c}"/><rect x="0" y="${-h + h * .18}" width="${w}" height=".5" fill="#fff" opacity=".45"/><rect x="0" y="${-h * .3}" width="${w}" height=".5" fill="#fff" opacity=".35"/></g>`;

/* ---------- the whole shop ---------- */
function shop() {
  let s = `<svg viewBox="0 0 320 100" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs>
    <linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C9B8EC"/><stop offset=".6" stop-color="#D9CCF2"/><stop offset="1" stop-color="#CDBDEB"/></linearGradient>
    <linearGradient id="gWain" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B8A4E3"/><stop offset="1" stop-color="#A592D8"/></linearGradient>
    <linearGradient id="gFloor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B58C7A"/><stop offset="1" stop-color="#8C6670"/></linearGradient>
    <linearGradient id="gWood" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9DDF7"/><stop offset="1" stop-color="#C9B6E8"/></linearGradient>
    <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E2358"/><stop offset=".7" stop-color="#5A4590"/><stop offset="1" stop-color="#8A6FBF"/></linearGradient>
    <linearGradient id="gGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".45" stop-color="#fff" stop-opacity=".05"/><stop offset=".55" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#fff" stop-opacity=".04"/></linearGradient>
    <linearGradient id="gMirror" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F4EEFF"/><stop offset=".5" stop-color="#C9B8EE"/><stop offset="1" stop-color="#E9E0FF"/></linearGradient>
    <radialGradient id="gWarm"><stop offset="0" stop-color="#FFE6A8" stop-opacity=".95"/><stop offset=".4" stop-color="#FFC77A" stop-opacity=".35"/><stop offset="1" stop-color="#FFC77A" stop-opacity="0"/></radialGradient>
    <radialGradient id="gLav"><stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".35" stop-color="#E7DAFF" stop-opacity=".45"/><stop offset="1" stop-color="#C9B2FF" stop-opacity="0"/></radialGradient>
    <pattern id="pPaper" width="6" height="6" patternUnits="userSpaceOnUse"><path d="M3 0v6" stroke="#fff" stroke-opacity=".12" stroke-width=".6"/><circle cx="0" cy="3" r=".35" fill="#fff" opacity=".18"/></pattern>
  </defs>`;
  /* wall, wallpaper, wainscot, floor */
  s += `<rect width="320" height="82" fill="url(#gWall)"/><rect width="320" height="58" fill="url(#pPaper)"/>
    <rect y="58" width="320" height="24" fill="url(#gWain)"/><rect y="57.300" width="320" height="1.400" fill="#E6DAF8"/>`;
  for (let x = 2; x < 320; x += 16) s += `<rect x="${x}" y="61" width="13" height="18" rx="1" fill="none" stroke="#C8B8EC" stroke-width=".5"/>`;
  s += `<rect y="82" width="320" height="18" fill="url(#gFloor)"/><rect y="81.400" width="320" height="1.200" fill="#E6D4EE"/>`;
  for (let i = 0; i < 6; i++) s += `<path d="M0 ${84 + i * 3}H320" stroke="#7A5466" stroke-width=".25" opacity=".45"/>`;
  for (let i = 0; i < 40; i++) s += `<path d="M${(i * 17 + (i % 2) * 8) % 320} ${84 + (i % 6) * 3}v3" stroke="#7A5466" stroke-width=".25" opacity=".45"/>`;
  /* ceiling beam and fairy lights */
  s += `<rect width="320" height="4" fill="#B6A2E0"/><rect y="4" width="320" height=".8" fill="#E6DAF8"/>`;
  let path = 'M0 5', bulbs = '';
  for (let x = 0; x < 320; x += 32) path += ` Q${x + 16} 13 ${x + 32} 5`;
  s += `<path d="${path}" stroke="#7E6A9E" stroke-width=".35" fill="none"/>`;
  for (let x = 2; x < 320; x += 4.2) {
    const t = ((x % 32) / 32), y = 5 + 8 * (4 * t * (1 - t)) * 1 + .5;
    bulbs += `<circle class="bulb" style="animation-delay:${(-R(0, 3, x)).toFixed(2)}s" cx="${x.toFixed(1)}" cy="${y.toFixed(2)}" r=".75" fill="#FFF1C2"/>`;
  }
  s += bulbs;
  [[9, 18], [52, 14], [99, 20], [132, 12], [216, 16], [252, 13], [304, 18], [176, 9]].forEach(([x, l], i) => {
    s += `<g class="sway" style="animation-delay:${-i * .7}s;transform-origin:${x}px 5px"><path d="M${x} 5V${5 + l}" stroke="#E9E0FA" stroke-width=".2"/>${i % 2 ? crystal(x, 5 + l + 3, .9) : star(x, 5 + l + 1.400, 1.800, '#FFE9A8', 'tw', -i * .4)}</g>`;
  });

  /* ---------- warm corner: window, couch, lamp ---------- */
  s += `<g><path d="M10 56V30a16 14 0 0 1 32 0V56Z" fill="url(#gSky)"/>`;
  for (let i = 0; i < 16; i++) s += star(R(12, 40, i), R(18, 50, i + 3), R(.4, .9, i + 7), '#FFF8DA', 'tw', -R(0, 4, i));
  s += `<circle cx="33" cy="25" r="3" fill="#FFF3D1"/><circle cx="34.400" cy="24" r="2.600" fill="#5A4590"/>`;
  for (let i = 0; i < 7; i++) s += `<path class="rain" style="animation-delay:${(-i * .55).toFixed(2)}s" d="M${14 + i * 4} 20v3" stroke="#E9DBFF" stroke-width=".25" stroke-linecap="round" opacity=".7"/>`;
  s += `<path d="M10 56V30a16 14 0 0 1 32 0V56Z" fill="none" stroke="#F1E9FB" stroke-width="1.400"/><path d="M26 16V56M10 40H42" stroke="#F1E9FB" stroke-width=".8"/><rect x="8" y="55.500" width="36" height="1.800" rx=".5" fill="#EFE6FA"/>
    <path d="M6 12C9 25 8 46 11 60H5C5 44 6 24 4 12Z" fill="#B49DE6"/><path d="M46 12C43 25 44 46 41 60H47C47 44 46 24 48 12Z" fill="#B49DE6"/><path d="M4 11.500H48" stroke="#9C86CF" stroke-width="1"/></g>`;
  s += flame(14, 54, .8) + `<rect x="13.200" y="54" width="1.600" height="1.600" fill="#FFF4E6"/>`;
  /* couch */
  s += `<g><rect x="6" y="57" width="42" height="15" rx="5" fill="#A88BDB"/><rect x="6" y="57" width="42" height="3" rx="1.500" fill="#B99EE6"/>
    <rect x="3" y="64" width="9" height="15" rx="3.500" fill="#9A7CD0"/><rect x="42" y="64" width="9" height="15" rx="3.500" fill="#9A7CD0"/>
    <rect x="9" y="68" width="36" height="9" rx="2.500" fill="#B79BE5"/><rect x="5" y="78" width="44" height="2.500" rx="1" fill="#8A6CC0"/>
    <rect x="7" y="80.500" width="1.400" height="2" fill="#6F5590"/><rect x="45.600" y="80.500" width="1.400" height="2" fill="#6F5590"/>
    <rect x="12" y="60" width="11" height="9" rx="3" fill="#E8C3E8" transform="rotate(-8 17 64)"/><rect x="31" y="60" width="11" height="9" rx="3" fill="#D9C8FF" transform="rotate(7 36 64)"/>
    <path d="M38 66c4 0 8 1 9 4v9c-3-1-6-3-8-1-1-4-1-8-1-12Z" fill="#F4D9EC"/><path d="M39 70h7M39 73h7" stroke="#E2B9D8" stroke-width=".4"/></g>`;
  /* floor lamp */
  s += `<g><circle class="halo" cx="55" cy="44" r="14" fill="url(#gWarm)"/><path d="M55 48V81" stroke="#8C77AE" stroke-width=".9"/><ellipse cx="55" cy="81.500" rx="3.500" ry=".8" fill="#8C77AE"/><path d="M50.500 39h9l2 8h-13Z" fill="#FFE2B6"/><path d="M50.500 39h9l2 8h-13Z" fill="none" stroke="#E8BD86" stroke-width=".3"/></g>`;
  /* framed photo above the couch sits in HTML; frame here */
  s += `<rect x="46.400" y="19.400" width="12.200" height="15.200" rx=".6" fill="#F3EAFB" stroke="#C7B3EC" stroke-width=".6"/>`;
  /* hanging plant */
  s += `<path d="M50 4V10" stroke="#E9E0FA" stroke-width=".2"/><path d="M47.600 10h4.800l-.8 3.400h-3.200Z" fill="#F0E4FA"/><path d="M48.500 13c-1 3-.6 6-1.600 9M51 13c.6 3 1.600 5 .8 9M50 13c0 2 .4 4 0 6" stroke="#8FB592" stroke-width=".5" fill="none"/>`;
  for (let i = 0; i < 9; i++) s += `<ellipse cx="${47 + R(0, 6, i + 40)}" cy="${13 + R(1, 9, i + 50)}" rx=".9" ry=".5" fill="#A6CDA9" transform="rotate(${R(-50, 50, i)} ${47 + R(0, 6, i + 40)} ${13 + R(1, 9, i + 50)})"/>`;

  /* ---------- memory cabinet ---------- */
  s += `<g><circle class="halo" cx="84" cy="44" r="26" fill="url(#gLav)" opacity=".5"/>
    <path d="M63 80V20a21 9 0 0 1 42 0V80Z" fill="url(#gWood)" stroke="#BFA9E6" stroke-width=".5"/>
    <path d="M66 77V21a18 6.500 0 0 1 36 0V77Z" fill="#E7DCFA"/>`;
  for (const y of [37, 57]) s += `<rect x="66" y="${y}" width="36" height="1.300" fill="#CDB9EE"/>`;
  s += `<path d="M66 77V21a18 6.500 0 0 1 36 0V77Z" fill="url(#gGlass)"/><path d="M84 15V77" stroke="#EFE7FC" stroke-width=".7"/>
    <path d="M70 24 78 76M90 24l6 40" stroke="#fff" stroke-width=".6" opacity=".45"/>
    <rect x="62" y="79" width="44" height="2.200" rx=".6" fill="#C2AEE6"/><rect x="64" y="81" width="1.500" height="1.500" fill="#A592D0"/><rect x="102.500" y="81" width="1.500" height="1.500" fill="#A592D0"/>
    <rect x="76" y="11" width="16" height="3.600" rx="1.800" fill="#F7F1FD" stroke="#C7B3EC" stroke-width=".3"/></g>`;
  s += crystal(104.500, 79, 1.100) + crystal(107, 80, .8, '#F2D2F2', '#DDAFE0');

  /* ---------- potion shelf ---------- */
  s += `<g>`;
  for (const y of [36, 56]) s += `<rect x="109" y="${y}" width="42" height="1.600" rx=".5" fill="#EADFFA"/><rect x="109" y="${y + 1.600}" width="42" height=".8" fill="#BBA6E2"/><path d="M112 ${y + 1.600}v3l2-3M148 ${y + 1.600}v3l-2-3" stroke="#BBA6E2" stroke-width=".7" fill="none"/>`;
  const shelf1 = [[113, 'round', '#B9A8FF'], [120, 'tall', '#FF9EC4'], [127, 'flask', '#9EE6B8'], [135, 'heart', '#FFB3D1'], [142, 'vial', '#8FD6FF'], [147.500, 'jar', '#F7D86B']];
  const shelf2 = [[114, 'jar', '#C9B2FF'], [121.500, 'vial', '#FFC48A'], [127.500, 'round', '#8FD6FF'], [136, 'tall', '#B9A8FF'], [144, 'flask', '#FF9EC4']];
  shelf1.forEach(([x, k, c], i) => { s += bottle(x, 30.600, k, c, .62); });
  shelf2.forEach(([x, k, c], i) => { s += bottle(x, 50.600, k, c, .62); });
  s += flame(131.500, 33, .55) + `<rect x="130.900" y="33" width="1.200" height="3" fill="#FFF4E6"/>`;
  s += crystal(140, 54.500, .8) + crystal(150, 34.800, .7, '#F2D2F2', '#DDAFE0');
  s += `</g>`;
  /* chalkboard sign on the floor (text in HTML) */
  s += `<g><path d="M141 82 143 64M154 82 152 64" stroke="#9B7458" stroke-width=".8"/><rect x="139.500" y="63" width="16" height="11" rx="1" fill="#4C3F6B" stroke="#C9A98A" stroke-width=".8"/></g>`;

  /* ---------- the counter, mailbox, sign chains ---------- */
  s += `<path d="M163 4V10M205 4V10" stroke="#9C86CF" stroke-width=".35"/>`;
  s += `<g><rect x="156" y="61" width="58" height="3" rx="1" fill="#EFE5FB"/><rect x="157.500" y="64" width="55" height="17" fill="url(#gWood)" stroke="#C3AEE7" stroke-width=".4"/>
    <rect x="160" y="66" width="12" height="13" rx=".8" fill="none" stroke="#CDB9EE" stroke-width=".5"/><rect x="198" y="66" width="12" height="13" rx=".8" fill="none" stroke="#CDB9EE" stroke-width=".5"/>
    <rect x="174.500" y="66.500" width="21" height="11" rx=".8" fill="#E2D5F8" stroke="#BFA9E6" stroke-width=".4" class="drawerF"/>
    <rect x="178" y="68.200" width="14" height="3" rx=".5" fill="#F8F3FE" stroke="#CDB9EE" stroke-width=".2"/><rect x="182.500" y="73.500" width="5" height="1.400" rx=".7" fill="#C9A86B"/></g>`;
  /* mailbox */
  s += `<g class="mbox"><circle class="halo" cx="164" cy="54" r="9" fill="url(#gLav)" opacity=".6"/><rect x="163.300" y="56" width="1.400" height="5" fill="#8C77AE"/><path d="M158.500 57V50a5.500 5 0 0 1 11 0V57Z" fill="#7C5CC4"/><path d="M158.500 57V50a5.500 5 0 0 1 11 0V57Z" fill="none" stroke="#A98BE8" stroke-width=".4"/><rect x="159.500" y="51.500" width="9" height="1.200" fill="#9A7CE0"/><path d="M169.500 50h2.400v-3h1.200v6" stroke="#E36B8F" stroke-width=".7" fill="none"/></g>`;
  /* little bell */
  s += `<g><path d="M205 61a3 3 0 0 1 6 0Z" fill="#E1BE75"/><circle cx="208" cy="57.800" r=".5" fill="#C9A35B"/><rect x="204" y="60.600" width="8" height=".7" rx=".3" fill="#C9A35B"/></g>`;
  s += crystal(213, 60.500, .7);

  /* ---------- mirror ---------- */
  s += `<g><path d="M224 82l4-16M244 82l-4-16" stroke="#C9A86B" stroke-width=".9"/>
    <ellipse cx="234" cy="40" rx="13" ry="25" fill="#E1C88F"/><ellipse cx="234" cy="40" rx="11.800" ry="23.800" fill="#F3E2B9"/>
    <ellipse cx="234" cy="40" rx="10.400" ry="22.400" fill="url(#gMirror)"/><ellipse class="mist" cx="234" cy="40" rx="10.400" ry="22.400" fill="url(#gLav)" opacity=".5"/>
    <path d="M228 26q2-6 6-8M227 34l9-14" stroke="#fff" stroke-width=".6" opacity=".7" fill="none"/>`;
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; s += `<circle cx="${(234 + Math.cos(a) * 12.400).toFixed(1)}" cy="${(40 + Math.sin(a) * 24.200).toFixed(1)}" r=".8" fill="#FFF4D6"/>`; }
  s += `<path d="M230 14.500q4-4 8 0" stroke="#E1C88F" stroke-width="1.200" fill="none"/>${star(234, 13, 1.600, '#FFE9A8', 'tw')}</g>`;

  /* ---------- the staircase up to the observatory ---------- */
  s += `<g><path d="M262 0h40v10h-40Z" fill="#2E2358"/>`;
  for (let i = 0; i < 9; i++) s += star(R(264, 300, i + 90), R(1, 9, i + 95), R(.4, .8, i), '#FFF8DA', 'tw', -i * .3);
  s += `<circle class="halo" cx="282" cy="6" r="14" fill="url(#gLav)" opacity=".6"/>`;
  for (let i = 0; i < 12; i++) {
    const x = 252 + i * 3.800, y = 82 - i * 6.300;
    s += `<rect x="${x.toFixed(1)}" y="${(y - 6.300).toFixed(1)}" width="11" height="6.300" fill="${i % 2 ? '#E2D5F8' : '#EADFFA'}"/><rect x="${x.toFixed(1)}" y="${(y - 6.300).toFixed(1)}" width="11" height=".9" fill="#F7F1FD"/>`;
  }
  s += `<path d="M254 70L298 4" stroke="#C9A86B" stroke-width=".9"/>`;
  for (let i = 0; i < 11; i++) s += `<path d="M${(255 + i * 4).toFixed(1)} ${(69 - i * 6).toFixed(1)}v7" stroke="#C9A86B" stroke-width=".4"/>`;
  s += `<rect x="252.500" y="24" width="18" height="5" rx="1" fill="#F7F1FD" stroke="#C7B3EC" stroke-width=".3"/></g>`;

  /* ---------- bookshelf and floating books ---------- */
  s += `<g><rect x="300" y="14" width="20" height="68" fill="url(#gWood)" stroke="#BFA9E6" stroke-width=".4"/>`;
  const cols = ['#9B7FD6', '#E8A6C6', '#7FB3D9', '#C9B2FF', '#F2C27A', '#8C6CC4', '#B5D6B0'];
  for (const y of [30, 46, 62, 78]) {
    s += `<rect x="300" y="${y}" width="20" height="1.200" fill="#CDB9EE"/>`;
    let x = 301.500, i = 0;
    while (x < 318) { const w = R(1.600, 2.600, x + y), h = R(9, 13, x * y); s += book(x, y, w, h, cols[(i++ + y) % cols.length], x > 315 ? -8 : 0); x += w + .3; }
  }
  s += `</g>`;
  s += `<g class="floaty" style="animation-delay:-1s">${book(288, 30, 2.400, 9, '#E8A6C6', 70)}</g><g class="floaty" style="animation-delay:-2.600s">${book(293, 22, 2.200, 8, '#9B7FD6', -60)}</g>`;
  s += flame(310, 13, .6) + `<rect x="309.400" y="13" width="1.200" height="1.200" fill="#FFF4E6"/>`;
  /* plants */
  s += `<path d="M106 82h6l-1-5h-4Z" fill="#EADFFA"/><path d="M109 77c-1-4-4-6-6-6M109 77c0-5 2-8 5-9M109 77c1-3 1-6 0-9" stroke="#8FB592" stroke-width=".6" fill="none"/>`;
  s += `</svg>`;
  return s;
}

/* ---------- the drawer's little objects, 60x60 ---------- */
const ICON = {
  tease: `<path d="M14 46 44 16l6 6-30 30-8 2Z" fill="#F2C27A"/><path d="M44 16l6 6 4-4-6-6Z" fill="#E8A6C6"/><path d="M14 46l-2 8 8-2Z" fill="#5B4340"/>`,
  polaroid: `<rect x="12" y="10" width="34" height="40" rx="2" fill="#FFFDF8" transform="rotate(-6 29 30)"/><rect x="16" y="14" width="26" height="24" fill="#C9B2FF" transform="rotate(-6 29 30)"/><path d="M22 34l6-7 5 5 4-3 5 6Z" fill="#fff" opacity=".6" transform="rotate(-6 29 30)"/>`,
  headphones: `<path d="M14 38c0-20 32-20 32 0" fill="none" stroke="#8C6CC4" stroke-width="5" stroke-linecap="round"/><rect x="9" y="34" width="10" height="16" rx="5" fill="#B49DE6"/><rect x="41" y="34" width="10" height="16" rx="5" fill="#B49DE6"/>`,
  scribble: `<rect x="10" y="10" width="40" height="40" rx="2" fill="#FFFDF4"/><path d="M16 22c6-6 10 8 16 0s8 8 14 0M16 34c4 4 8-4 12 0s8 4 12-2M18 44h10" stroke="#8C6CC4" stroke-width="2" fill="none" stroke-linecap="round"/>`,
  gift: `<rect x="12" y="26" width="36" height="24" rx="2" fill="#E8A6C6"/><rect x="10" y="20" width="40" height="8" rx="2" fill="#F2BCD5"/><rect x="27" y="20" width="6" height="30" fill="#9B7FD6"/><path d="M30 20c-6-10-14-6-10 0Zm0 0c6-10 14-6 10 0Z" fill="#9B7FD6"/>`,
  letters: `<rect x="10" y="24" width="38" height="24" rx="2" fill="#E9DCF8" transform="rotate(-8 29 36)"/><rect x="13" y="18" width="38" height="24" rx="2" fill="#FFFDF8"/><path d="M13 19l19 13 19-13" fill="none" stroke="#C9B2FF" stroke-width="1.600"/><circle cx="32" cy="31" r="3" fill="#E36B8F"/>`,
  phone: `<rect x="18" y="8" width="24" height="44" rx="5" fill="#4C3F6B"/><rect x="21" y="13" width="18" height="33" rx="2" fill="#E9DCF8"/><rect x="24" y="17" width="12" height="5" rx="2.500" fill="#9B7FD6"/><rect x="24" y="25" width="9" height="5" rx="2.500" fill="#fff"/><path d="M30 38c-3-3-5-1-4 1l4 3 4-3c1-2-1-4-4-1Z" fill="#E36B8F"/>`,
  calendar: `<rect x="10" y="14" width="40" height="36" rx="3" fill="#FFFDF8"/><rect x="10" y="14" width="40" height="9" rx="3" fill="#9B7FD6"/><path d="M18 10v8M42 10v8" stroke="#8C6CC4" stroke-width="2.400" stroke-linecap="round"/><path d="M33 32l2 4 4 .5-3 3 .8 4-3.800-2-3.800 2 .8-4-3-3 4-.5Z" fill="#F2C27A"/>`,
  tag: `<path d="M8 30 18 20h32v20H18Z" fill="#E7CBA0"/><circle cx="17" cy="30" r="2" fill="#6B4D3B"/><text x="33" y="33" text-anchor="middle" font-family="Caveat,cursive" font-weight="700" font-size="9" fill="#5A3E4B">Kanmani ♡</text>`,
  note: `<path d="M14 12h32v36H14Z" fill="#FFF6C8" transform="rotate(4 30 30)"/><path d="M20 22h20M20 28h16M20 34h18" stroke="#D7B86B" stroke-width="1.400" transform="rotate(4 30 30)"/><path d="M30 44c-3-3-5-1-4 1l4 3 4-3c1-2-1-4-4-1Z" fill="#E36B8F"/>`,
};

/* ---------- the shop from outside ---------- */
function outside() {
  let s = `<svg viewBox="0 0 200 200" aria-hidden="true"><defs><linearGradient id="oWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#B9A4E8"/><stop offset="1" stop-color="#9A82D6"/></linearGradient><radialGradient id="oGlow"><stop offset="0" stop-color="#FFE6A8"/><stop offset=".5" stop-color="#FFC77A" stop-opacity=".35"/><stop offset="1" stop-color="#FFC77A" stop-opacity="0"/></radialGradient><linearGradient id="oDoor" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7C5CC4"/><stop offset="1" stop-color="#6447A8"/></linearGradient></defs>
    <path d="M30 196V70l70-38 70 38v126Z" fill="url(#oWall)"/><path d="M22 74l78-46 78 46" stroke="#E9E0FA" stroke-width="5" fill="none" stroke-linejoin="round"/>
    <rect x="42" y="96" width="34" height="40" rx="17" fill="#FFE8B8" opacity=".9"/><path d="M59 96v40M42 116h34" stroke="#E9E0FA" stroke-width="2"/>
    <rect x="124" y="96" width="34" height="40" rx="17" fill="#FFE8B8" opacity=".9"/><path d="M141 96v40M124 116h34" stroke="#E9E0FA" stroke-width="2"/>
    <path d="M82 196V140a18 18 0 0 1 36 0V196Z" fill="#FFE2A8"/>
    <g class="odoor"><path d="M82 196V140a18 18 0 0 1 36 0V196Z" fill="url(#oDoor)"/><path d="M88 190v-46a12 12 0 0 1 24 0v46Z" fill="none" stroke="#A98BE8" stroke-width="1.200"/><circle cx="112" cy="168" r="2" fill="#E1BE75"/></g>
    <circle class="olight" cx="100" cy="114" r="18" fill="url(#oGlow)"/><circle class="olight" cx="100" cy="114" r="3" fill="#FFF4D0"/>
    <rect x="70" y="58" width="60" height="18" rx="3" fill="#F7F1FD" stroke="#C7B3EC"/>
    <path d="M30 196h140" stroke="#E9E0FA" stroke-width="3"/></svg>`;
  return s;
}

/* ---------- the birthday cake ---------- */
function cake() {
  let c = `<svg viewBox="0 0 200 170" aria-hidden="true"><defs><linearGradient id="ck1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9DCFF"/><stop offset="1" stop-color="#C9B2FF"/></linearGradient><linearGradient id="ck2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7EFFF"/><stop offset="1" stop-color="#DCCBFA"/></linearGradient><radialGradient id="gWarm"><stop offset="0" stop-color="#FFE6A8" stop-opacity=".95"/><stop offset=".4" stop-color="#FFC77A" stop-opacity=".35"/><stop offset="1" stop-color="#FFC77A" stop-opacity="0"/></radialGradient></defs>
    <ellipse cx="100" cy="158" rx="80" ry="9" fill="#2A1E4A" opacity=".35"/><ellipse cx="100" cy="150" rx="76" ry="10" fill="#F3EAFB"/>
    <path d="M38 104v40c0 6 28 11 62 11s62-5 62-11v-40Z" fill="url(#ck1)"/><ellipse cx="100" cy="104" rx="62" ry="10" fill="#DCCBFA"/>
    <path d="M38 106c6 8 10 0 16 8s10-2 16 6 10-4 16 4 10-6 16 4 10-6 16 2 10-8 16-2 10-8 18-6" stroke="#fff" stroke-width="4" fill="none" opacity=".85" stroke-linecap="round"/>
    <path d="M58 76v28c0 5 19 8 42 8s42-3 42-8V76Z" fill="url(#ck2)"/><ellipse cx="100" cy="76" rx="42" ry="8" fill="#F7EFFF"/>
    <text x="100" y="100" text-anchor="middle" font-family="Fraunces,Georgia,serif" font-weight="700" font-size="20" fill="#8C6CC4">32</text>`;
  [[86, 66], [100, 62], [114, 66]].forEach(([x, y], i) => { c += `<rect x="${x - 2}" y="${y}" width="4" height="12" rx="1" fill="${['#FFB3D1', '#C9B2FF', '#8FD6FF'][i]}"/><g transform="translate(${x} ${y})"><circle class="halo" cy="-4" r="10" fill="url(#gWarm)"/><path class="flick" d="M0-9C3-5 3-3 0-1-3-3-3-5 0-9Z" fill="#FFD27A"/></g>`; });
  for (let i = 0; i < 14; i++) c += `<circle cx="${50 + i * 7.400}" cy="${130 + Math.sin(i) * 4}" r="2" fill="${['#FFB3D1', '#8FD6FF', '#F7D86B', '#fff'][i % 4]}"/>`;
  return c + `</svg>`;
}

window.ART = { shop, ICON, outside, cake, bottle, star };
})();
