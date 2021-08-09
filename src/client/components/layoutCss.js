import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export const contentLayout = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));
  const padding = downSm ? 20 : 80;

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginTop: 80,
      marginBottom: 40,
      paddingLeft: padding,
      paddingRight: padding,
      "& p": {
        paddingLeft: 8,
        paddingRight: 8,
      },
    },
    link: {
      textDecoration: "none",
      color: "black",
      "&:focus, &:hover, &:visited, &:link, &:active": {
        textDecoration: "none",
      },
    },
    card: {
      marginBottom: 8,
      boxShadow: "8px 6px 10px grey",
      minWidth: "0%",
      minHeight: "0%",
    },
    bottomLine: {
      "& > *": {
        margin: theme.spacing(0.5),
      },
      borderBottom: "1px solid rgba(0, 0, 0, 0.1) !important",
      paddingBottom: 10,
      margin: "10 -80 10 -80",
    },
    basicLine: {
      "& > *": {
        margin: theme.spacing(0.5),
      },
      borderBottom: "1px solid rgba(0, 0, 0, 0.1) !important",
      paddingBottom: 10,
    },
  });

  return useStyles;
};
