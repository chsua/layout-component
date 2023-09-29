export const getStyle = (menuDirection) => {
    if (menuDirection === "row") {
        return {
            layout: {},
            menuContainer: rowMenuContainer,
            selectedMenuItem: selectedRowMenuItem,
            unselectedMenuItem: unselectedRowMenuItem,
            content,
        };
    }
    return {
        layout: columnTabLayoutContainer,
        menuContainer: columnMenuContainer,
        selectedMenuItem: selectedColumnMenuItem,
        unselectedMenuITem: unselectedColumnMenuItem,
        content,
    };
};
const rowMenuContainer = {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "flex-start",
    height: "30px",
    top: "1px",
    position: "relative",
};
const rowMenuItem = {
    maxWidth: "120px",
    minWidth: "40px",
    padding: "2px 10px",
    borderRadius: "4px 4px 0 0",
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    cursor: "pointer",
};
const unselectedRowMenuItem = Object.assign(Object.assign({}, rowMenuItem), { color: "rgba(0,0,0,0.8)", borderTop: "1px solid rgba(0,0,0,0.5)", borderLeft: "1px solid rgba(0,0,0,0.5)", borderRight: "1px solid rgba(0,0,0,0.5)", borderBottom: "1px solid rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.1)" });
const selectedRowMenuItem = Object.assign(Object.assign({}, rowMenuItem), { fontWeight: "600", borderTop: "1px solid rgba(0,0,0,0.5)", borderLeft: "1px solid rgba(0,0,0,0.5)", borderRight: "1px solid rgba(0,0,0,0.5)", borderBottom: "1px solid white", backgroundColor: "white" });
const columnTabLayoutContainer = {
    display: "flex",
};
const columnMenuContainer = {
    display: "flex",
    flexDirection: "column",
    width: "fit-content",
    maxWidth: "100px",
    position: "relative",
    left: "1px",
};
const columnMenuItem = {
    height: "30px",
    padding: "2px 15px",
    minWidth: "30px",
    borderRadius: "4px  0 0 4px",
    fontSize: "14px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    cursor: "pointer",
};
const unselectedColumnMenuItem = Object.assign(Object.assign({}, columnMenuItem), { color: "rgba(0,0,0,0.8)", borderTop: "1px solid rgba(0,0,0,0.5)", borderLeft: "1px solid rgba(0,0,0,0.5)", borderBottom: "1px solid rgba(0,0,0,0.5)", borderRight: "1px solid rgba(0,0,0,0.5)", backgroundColor: "rgba(0,0,0,0.1)" });
const selectedColumnMenuItem = Object.assign(Object.assign({}, columnMenuItem), { fontWeight: "600", borderTop: "1px solid rgba(0,0,0,0.5)", borderLeft: "1px solid rgba(0,0,0,0.5)", borderBottom: "1px solid rgba(0,0,0,0.5)", borderRight: "1px solid white", backgroundColor: "white" });
const content = {
    padding: "5px",
    border: "1px solid rgba(0,0,0,0.5)",
    backgroundColor: "white",
};
