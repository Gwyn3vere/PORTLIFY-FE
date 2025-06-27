import React, { useState, useEffect } from "react";
import { tagsData } from "../constants/sections";

function getRandomItems(arr, n) {
  const result = [];
  const taken = new Set();
  while (result.length < n && result.length < arr.length) {
    const idx = Math.floor(Math.random() * arr.length);
    if (!taken.has(idx)) {
      taken.add(idx);
      result.push(arr[idx]);
    }
  }
  return result;
}

export default function useRandomTags() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Chọn 10 tag ngẫu nhiên
    const selected = getRandomItems(tagsData, 10);

    // Chọn 3 tag trong 10 tag làm active
    const activeIndexes = new Set();
    while (activeIndexes.size < 3 && activeIndexes.size < selected.length) {
      activeIndexes.add(Math.floor(Math.random() * selected.length));
    }

    // Gán active cho 3 tag
    const finalTags = selected.map((tag, idx) => ({
      ...tag,
      active: activeIndexes.has(idx)
    }));

    setTags(finalTags);
  }, []);

  return tags;
}
