import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { getStyle } from "./style";
export default function TabLayout({ itemList, menuDirection }) {
    var _a;
    const [nowTabKey, setNowTabKey] = useState(itemList[0].key);
    const { layout, menuContainer, selectedMenuItem, unselectedMenuItem, content, } = getStyle(menuDirection);
    const minWidth = itemList.length * 40 - 12;
    const contentStyle = menuDirection === "row" ? Object.assign(Object.assign({}, content), { minWidth }) : content;
    return (_jsxs("div", Object.assign({ style: layout }, { children: [_jsx("div", Object.assign({ style: menuContainer }, { children: itemList.map(({ key, name }) => {
                    return (_jsx("button", Object.assign({ style: nowTabKey !== key ? unselectedMenuItem : selectedMenuItem, onClick: () => setNowTabKey(key) }, { children: name }), key));
                }) })), _jsx("div", Object.assign({ style: contentStyle }, { children: (_a = itemList.find((item) => item.key === nowTabKey)) === null || _a === void 0 ? void 0 : _a.content }))] })));
}
