/* eslint-disable react/no-children-prop */
import React, { memo } from "react";
import * as UI from "@chakra-ui/react";

export interface IDatePicker {
  isMinimumTodayDate?: boolean;
}

function SearchBar(props: IDatePicker) {
  const { isMinimumTodayDate } = props;
  return <UI.Box>hihi</UI.Box>;
}

export default memo(SearchBar);
