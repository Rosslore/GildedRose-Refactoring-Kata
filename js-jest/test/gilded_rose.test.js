const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
});

//write a test for the updateQuality function
describe("updateQuality", () => {
  describe("when updating a standard item", () => {
    it("should decrease the quality by 1", () => {
      const gildedRose = new Shop([new Item("Great Sword", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(9);

    });
    it("should decrease the sellIn by 1", () => {
      const gildedRose = new Shop([new Item("Great Sword", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
    });
  });
  describe("when updating an item that is aged brie", () => {

    it("should increase the quality by 1", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(11);
    });
    it("should decrease the sellIn by 1", () => {
      const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(11);
    });
  });
  
  describe(" when upatdating an item that is backstage passes", () => {
    it("should increase the quality by 2 if sellIn is less than 10", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(12);
    });
    it("should increase the quality by 3 if sellIn is less than 5", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(13);
    }
    );
    it("should decrease the quality to 0 if sellIn is less than 0", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    }
    );
    it("should decrease the sellIn by 1", () => {
      const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(9);
    });
  });
});



