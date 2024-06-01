import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Post_20231130 from './../blogs/202311/20231130.mdx';

interface MainProps {
  title: string;
}

export default function Main(props: MainProps) {
  const { title } = props;

  return (
    <Grid item xs={12} md={9} sx={{ mt: -4 }} >
      <Post_20231130 />
      <Divider />
    </Grid>
  );
}