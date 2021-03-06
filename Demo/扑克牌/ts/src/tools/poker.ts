enum Types {
  hongtao = "红桃",
  heitao = "黑桃",
  fangkuai = "梅花",
  meihua = "方块"
};

const list:[string,string,string,string,string,string,string,string,string,string,string,string,string] = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

interface IType {
  type:string, // 类型
  txt:string // 牌的内容
}

interface IUserT {
  [user:string]:IType[]
}


class Poker {
  private pokerArr:IType[] = []; // 一副牌
  licensingObj:IUserT = {
    user1: [],
    user2: [],
    user3: [],
    bot: []
  };

  constructor() {
    this.init();
  }

  private init() {
    this.ceaterPoker(); // 创建牌
    this.shuffle(); // 洗牌
  }

  /**
   * 创建扑克牌
   */
  private ceaterPoker() {
    const typesArr = Object.values(Types);
    console.log(typesArr);
    typesArr.forEach(item => {
      // 牌内容
      list.forEach(key => {
        console.log(2);
        const typeObj:IType = {
          type: item,
          txt: key
        };
        this.pokerArr.push(typeObj);
      });
    });

    const maxJaObj:IType = {
      type: "大王",
      txt: ""
    };
    const minJaObj:IType = {
      type: "小王",
      txt: ""
    };
    this.pokerArr.push(maxJaObj);
    this.pokerArr.push(minJaObj);
  }

  /**
   * 打印扑克牌内容
   */
  log() {
    console.table(this.pokerArr);
  }

  /**
   * 洗牌
   */
  shuffle() {
    this.pokerArr = this.pokerArr.sort((a, b) => {
      return Math.random() - 0.5;
    });
  }

  /**
   * 斗地主发牌
   * 发牌结束后，存在4个数组
   * 
   */
  licensing(){
    const arr = this.setUserNmu(3, 3);

    const newPokerArr = JSON.parse(JSON.stringify(this.pokerArr));
    let ind = 0;
    arr.forEach((item, index) => {
      const name = "user" + (index + 1);
      const newArr = newPokerArr.slice(ind, item);
      ind = item;

      this.licensingObj[name] = [...newArr];
      
    });

    this.licensingObj.bot = newPokerArr.slice(arr[2], arr[2] + 3);
  }

  /**
   * 辅助函数
   * 设置每个玩家的牌的张数
   * @param userLen 玩家的数量
   * @param botLen 底牌的数量
   */
  private setUserNmu(userLen:number, botLen:number):number[] {
    const len = this.pokerArr.length;
    const num =  (len - botLen) / userLen;
    const arr:number[] = [];

    let ind = 0;
    for (let i = 0; i < userLen; i++) {
      if(i === 0) {
        ind = ind + num;
      } else  {
        ind = ind + num;
      }
      arr.push(ind);
    }
    return arr;
  }

}

export {
  Poker
}
