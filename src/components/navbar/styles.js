import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    maxHeight: 120,
    borderBottom: "solid #eeeeee 1px",
    justifyContent: "center",
  },
  logo: {
    maxWidth: 160,
  },
  drawer: {
    width: 240,
    marginLeft: 5,
  },
  badge: {},
}));

export default useStyles;
