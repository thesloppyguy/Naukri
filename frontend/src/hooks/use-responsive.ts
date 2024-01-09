import { Breakpoint, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// ----------------------------------------------------------------------

export function useResponsive(query: string, start: number | Breakpoint, end: number | Breakpoint = "lg") {
    const theme = useTheme();

    const mediaUp = useMediaQuery(theme.breakpoints.up(start));

    const mediaDown = useMediaQuery(theme.breakpoints.down(start));

    const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

    const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

    if (query === 'up') {
        return mediaUp;
    }

    if (query === 'down') {
        return mediaDown;
    }

    if (query === 'between') {
        return mediaBetween;
    }

    return mediaOnly;
}