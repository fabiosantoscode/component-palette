'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var colors = [['Economist', '#e60900'], ['Beijing', '#121212'], ['Moscow', '#7a7a7a'], ['London', '#b6b6b6'], ['Berlin', '#f2f2f2'], ['Thimphu', '#ffffff'], ['Honolulu', '#16c9b3']];
function colorBox(color) {
    var bgStyle = { background: color };
    var fgStyle = { color: color, textShadow: '1px 1px 0 gray' };
    return _react2['default'].createElement(
        'span',
        null,
        _react2['default'].createElement('div', { className: 'palette__inline-color-block', style: bgStyle }),
        _react2['default'].createElement(
            'span',
            { style: fgStyle },
            color
        )
    );
}
var colorSamples = colors.map(function (_ref) {
    var name = _ref[0];
    var color = _ref[1];
    return _react2['default'].createElement(
        'tr',
        { className: 'palette__color-sample' },
        _react2['default'].createElement(
            'td',
            null,
            _react2['default'].createElement(
                'code',
                null,
                name
            )
        ),
        _react2['default'].createElement(
            'td',
            null,
            colorBox(color)
        )
    );
});
exports['default'] = _react2['default'].createElement(
    'table',
    null,
    colorSamples
);
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGUuZXM2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztxQkFBa0IsT0FBTzs7OztBQUV6QixJQUFNLE1BQU0sR0FBRyxDQUNiLENBQUUsV0FBVyxFQUFFLFNBQVMsQ0FBRSxFQUMxQixDQUFFLFNBQVMsRUFBRSxTQUFTLENBQUUsRUFDeEIsQ0FBRSxRQUFRLEVBQUUsU0FBUyxDQUFFLEVBQ3ZCLENBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBRSxFQUN2QixDQUFFLFFBQVEsRUFBRSxTQUFTLENBQUUsRUFDdkIsQ0FBRSxTQUFTLEVBQUUsU0FBUyxDQUFFLEVBQ3hCLENBQUUsVUFBVSxFQUFFLFNBQVMsQ0FBRSxDQUMxQixDQUFDO0FBQ0YsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0FBQ3ZCLFFBQU0sT0FBTyxHQUFHLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3RDLFFBQU0sT0FBTyxHQUFHLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztBQUN4RCxXQUFROzs7UUFDTiwwQ0FBSyxTQUFTLEVBQUMsNkJBQTZCLEVBQUMsS0FBSyxFQUFFLE9BQU8sQUFBQyxHQUFPO1FBQ25FOztjQUFNLEtBQUssRUFBRSxPQUFPLEFBQUM7WUFBRSxLQUFLO1NBQVE7S0FDL0IsQ0FBRTtDQUNWO0FBQ0QsSUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQWU7UUFBYixJQUFJLEdBQU4sSUFBZTtRQUFQLEtBQUssR0FBYixJQUFlO1dBQzVDOztVQUFJLFNBQVMsRUFBQyx1QkFBdUI7UUFDakM7OztZQUNJOzs7Z0JBQU8sSUFBSTthQUFRO1NBQ2xCO1FBQ0w7OztZQUNLLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDZjtLQUNKO0NBQ1IsQ0FBQyxDQUFDO3FCQUVDOzs7SUFDSyxZQUFZO0NBQ1QiLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGNvbG9ycyA9IFtcbiAgWyAnRWNvbm9taXN0JywgJyNlNjA5MDAnIF0sXG4gIFsgJ0JlaWppbmcnLCAnIzEyMTIxMicgXSxcbiAgWyAnTW9zY293JywgJyM3YTdhN2EnIF0sXG4gIFsgJ0xvbmRvbicsICcjYjZiNmI2JyBdLFxuICBbICdCZXJsaW4nLCAnI2YyZjJmMicgXSxcbiAgWyAnVGhpbXBodScsICcjZmZmZmZmJyBdLFxuICBbICdIb25vbHVsdScsICcjMTZjOWIzJyBdLFxuXTtcbmZ1bmN0aW9uIGNvbG9yQm94KGNvbG9yKSB7XG4gIGNvbnN0IGJnU3R5bGUgPSB7IGJhY2tncm91bmQ6IGNvbG9yIH07XG4gIGNvbnN0IGZnU3R5bGUgPSB7IGNvbG9yLCB0ZXh0U2hhZG93OiAnMXB4IDFweCAwIGdyYXknIH07XG4gIHJldHVybiAoPHNwYW4+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWxldHRlX19pbmxpbmUtY29sb3ItYmxvY2tcIiBzdHlsZT17YmdTdHlsZX0+PC9kaXY+XG4gICAgPHNwYW4gc3R5bGU9e2ZnU3R5bGV9Pntjb2xvcn08L3NwYW4+XG4gIDwvc3Bhbj4pO1xufVxuY29uc3QgY29sb3JTYW1wbGVzID0gY29sb3JzLm1hcCgoWyBuYW1lLCBjb2xvciBdKSA9PiAoXG4gICAgPHRyIGNsYXNzTmFtZT1cInBhbGV0dGVfX2NvbG9yLXNhbXBsZVwiPlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgICA8Y29kZT57bmFtZX08L2NvZGU+XG4gICAgICAgIDwvdGQ+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICAgIHtjb2xvckJveChjb2xvcil9XG4gICAgICAgIDwvdGQ+XG4gICAgPC90cj5cbikpO1xuZXhwb3J0IGRlZmF1bHQgKFxuICAgIDx0YWJsZT5cbiAgICAgICAge2NvbG9yU2FtcGxlc31cbiAgICA8L3RhYmxlPlxuKTtcbiJdfQ==