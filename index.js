const _0x1269c8 = _0x28e4;
(function (_0x1bd9e9, _0x343221) {
  const _0x3df8cd = _0x28e4,
    _0x5f5902 = _0x1bd9e9();
  while (!![]) {
    try {
      const _0x2a916a =
        (parseInt(_0x3df8cd(0x12c)) / 0x1) *
          (parseInt(_0x3df8cd(0x125)) / 0x2) +
        parseInt(_0x3df8cd(0x12a)) / 0x3 +
        (parseInt(_0x3df8cd(0x12f)) / 0x4) *
          (-parseInt(_0x3df8cd(0x133)) / 0x5) +
        -parseInt(_0x3df8cd(0x129)) / 0x6 +
        (-parseInt(_0x3df8cd(0x13c)) / 0x7) *
          (parseInt(_0x3df8cd(0x137)) / 0x8) +
        (-parseInt(_0x3df8cd(0x13a)) / 0x9) *
          (parseInt(_0x3df8cd(0x12d)) / 0xa) +
        (parseInt(_0x3df8cd(0x13b)) / 0xb) * (parseInt(_0x3df8cd(0x138)) / 0xc);
      if (_0x2a916a === _0x343221) break;
      else _0x5f5902['push'](_0x5f5902['shift']());
    } catch (_0x228176) {
      _0x5f5902['push'](_0x5f5902['shift']());
    }
  }
})(_0x2278, 0xc7e0b);
import { makeIntro, assign2 } from './assign.js';
const intro = document[_0x1269c8(0x12e)]('.intro'),
  btn = document[_0x1269c8(0x12e)](_0x1269c8(0x134)),
  myname = document['querySelector'](_0x1269c8(0x130)),
  myage = document['querySelector'](_0x1269c8(0x126)),
  equals = (_0x46576b, _0x50624c) =>
    JSON[_0x1269c8(0x127)](_0x46576b) === JSON[_0x1269c8(0x127)](_0x50624c);
function _0x2278() {
  const _0x35bd9e = [
    'TestCase\x201:\x20',
    '3984pcvqYl',
    '#age',
    'stringify',
    'innerText',
    '5304288KJwyko',
    '4406142UhvhTD',
    '틀렸습니다\x0a',
    '199SItefZ',
    '611080FlIWcl',
    'querySelector',
    '4JKhaWU',
    '#name',
    'value',
    'TestCase\x202:\x20',
    '7077955kVMcEQ',
    '.submit',
    '.res',
    'addEventListener',
    '80824nOrlGO',
    '24WJMyPS',
    '없어요!',
    '144IScqUO',
    '20494034yDvcyV',
    '1036QxDYSf',
  ];
  _0x2278 = function () {
    return _0x35bd9e;
  };
  return _0x2278();
}
function _0x28e4(_0x304328, _0x1b1a46) {
  const _0x227851 = _0x2278();
  return (
    (_0x28e4 = function (_0x28e4ba, _0x53af4f) {
      _0x28e4ba = _0x28e4ba - 0x124;
      let _0x10e583 = _0x227851[_0x28e4ba];
      return _0x10e583;
    }),
    _0x28e4(_0x304328, _0x1b1a46)
  );
}
btn[_0x1269c8(0x136)]('click', () => {
  const _0x496653 = _0x1269c8;
  intro[_0x496653(0x128)] += makeIntro(
    myname[_0x496653(0x131)],
    myage[_0x496653(0x131)],
  );
  const _0x4face2 = document[_0x496653(0x12e)](_0x496653(0x135));
  (_0x4face2[_0x496653(0x128)] =
    _0x496653(0x124) +
    (equals(assign2([0x5, 0x9, 0xa, 0x7], 0x5), [0x7, 0x9])
      ? '맞았습니다\x0a'
      : '틀렸습니다\x0a')),
    (_0x4face2[_0x496653(0x128)] +=
      _0x496653(0x132) +
      (equals(assign2([0x2, 0x24, 0x3, 0x1], 0x1), [_0x496653(0x139)])
        ? '맞았습니다\x0a'
        : _0x496653(0x12b))),
    (_0x4face2[_0x496653(0x128)] +=
      _0x496653(0x132) +
      (equals(assign2([0x3, 0x2, 0x6], 0xa), [0x2, 0x3, 0x6])
        ? '맞았습니다\x0a'
        : _0x496653(0x12b)));
});
