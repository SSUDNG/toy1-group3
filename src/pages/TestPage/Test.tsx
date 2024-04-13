import React from "react";

interface TestProps {
  handleSignOut: () => void;
}

const Test = ({ handleSignOut }: TestProps) => {
  return (
    <button type="button" onClick={handleSignOut}>
      로그아웃
    </button>
  );
};

export default Test;
