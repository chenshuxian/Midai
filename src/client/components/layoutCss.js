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
  });

  return useStyles;
};
