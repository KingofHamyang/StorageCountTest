pragma solidity ^0.4.13;

contract StorageCountTest {
  uint a;
  uint b;

  function wrtie_values(uint _a) public {
    address dc = 0x6f372568c75b513a525cc4c2fc6cc8073e424039;
    uint mod = _a % 100;
    if (mod >= 0 && mod <= 80) {
      a = _a;
    }
    if (mod >= 50 && mod <= 90) {
      require(dc.call(bytes4(keccak256("set_b(uint256)")), _a));
    }
  }

  function read_values(uint _a) public returns (uint) {
    address dc = 0x6f372568c75b513a525cc4c2fc6cc8073e424039;
    uint mod = _a % 100;
    uint count = 0;
    if (mod >= 0 && mod <= 80) {
      count = count + a;
    }
    if (mod >= 50 && mod <= 90) {
      require(dc.call(bytes4(keccak256("get_b()"))));
    }
    return count;
  }
}
