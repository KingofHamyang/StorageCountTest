pragma solidity ^0.4.13;

contract StorageCountTest {
  uint a;
  uint b;

  function set_a(uint _a) public {
    a = _a;
  }

  function set_b(uint _b) public {
    b = _b;
  }

  function get_a() public return uint {
    return a;
  }

  function get_b() public return uint {
    return b;
  }
}
