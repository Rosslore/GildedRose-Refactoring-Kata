class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  //what is handleStandardItem doing?
  //A: it is handling the standard item, which is the item that is not Aged Brie, Backstage passes, or Sulfuras

  handleStandardItem(item) {
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
    item.sellIn = item.sellIn - 1;
  }
  handleSulfuras(item) {
    item.sellIn = item.sellIn - 1;
  }
  handleBackstagePasses(item) {

    if (item.sellIn < 11 && item.quality < 50) {
      item.quality = item.quality + 2;
    }

    if (item.sellIn < 6 && item.quality < 50) {
      item.quality = item.quality + 1;
    }


    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
  }
  handleAgedBrie(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality = item.quality + 1;
    }
  }


  updateQuality() {


    const items = this.items.map(item => {
      if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
        this.handleStandardItem(item);
      } else if (item.name == 'Aged Brie') {
        this.handleAgedBrie(item);
      } else if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        this.handleBackstagePasses(item);
      } else if (item.name == 'Sulfuras, Hand of Ragnaros') {
        this.handleSulfuras(item);
      }

      return item;


    });

    return items;
  }
}


module.exports = {
  Item,
  Shop
};



