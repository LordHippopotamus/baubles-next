"use client";

import {
  Box,
  Pagination as MuiPagination,
  PaginationItem,
} from "@mui/material";
import Link from "next/link";

const Pagination = ({ count, page }: { count: number; page: number }) => (
  <Box display="flex" justifyContent="center" mt={2}>
    <MuiPagination
      page={page}
      count={count}
      renderItem={(item) => (
        <PaginationItem
          component={Link}
          href={"?page=" + item.page}
          {...item}
        />
      )}
    />
  </Box>
);

export default Pagination;
