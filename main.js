class BitSet {
  constructor(size) {
    this.size = size;
    this.bits = new Array(Math.ceil(size / 32)).fill(0);
  }

  // Set a specific bit to 1
  set(index) {
    const arrayIndex = Math.floor(index / 32);
    const bitIndex = index % 32;
    this.bits[arrayIndex] |= 1 << bitIndex;
  }

  // Clear a specific bit to 0
  clear(index) {
    const arrayIndex = Math.floor(index / 32);
    const bitIndex = index % 32;
    this.bits[arrayIndex] &= ~(1 << bitIndex);
  }

  // Check if a specific bit is set (1)
  get(index) {
    const arrayIndex = Math.floor(index / 32);
    const bitIndex = index % 32;
    return (this.bits[arrayIndex] & (1 << bitIndex)) !== 0;
  }

  // Print the bits for visualization
  toString() {
    return this.bits.map((bit) => bit.toString(2).padStart(32, "0")).join("");
  }
}

// Example usage
const bitSet = new BitSet(64);

bitSet.set(3);
bitSet.set(12);
bitSet.set(25);

console.log("BitSet: ", bitSet.toString());
console.log("Is bit 12 set?", bitSet.get(12));
bitSet.clear(12);
console.log("BitSet after clearing bit 12: ", bitSet.toString());
