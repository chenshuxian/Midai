import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const contentLayout = () => {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const padding = downSm ? 20 : 80;

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      marginTop: 40,
      marginBottom: 40,
      paddingLeft: padding,
      paddingRight: padding
    },
  })

  return useStyles;

}
