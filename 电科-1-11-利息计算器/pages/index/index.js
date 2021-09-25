/* index.js */
Page({ 
    data: {
    flag: true,
    name: '',
    principal: '',
    interest_rate: '',
    access_period: '',
    interest:'',
    Total_principal_after_deposit_and_withdrawal_period:''
  },

  nameInput: function (e) {
    this.setData({
      name: e.detail.value
    });
  },
  principalInput: function (e) {
    this.setData({
      principal: e.detail.value
    });
  },
  interest_rateInput: function (e) {
    this.setData({
      interest_rate: e.detail.value
    });
  },
  access_periodInput: function (e) {
    this.setData({
      access_period: e.detail.value
    });
  },

  mysubmit: function () {
      var benjin =parseInt(this.data.principal);
      var lilu = parseFloat(this.data.interest_rate);
      var lixi = 0;
      for(var i = 1;i <= this.data.access_period; i++  ){
        lixi += benjin*lilu;
        benjin = benjin + benjin*lilu;
      }
      benjin = benjin.toFixed(2);
      lixi = lixi.toFixed(2);
      this.setData({
        Total_principal_after_deposit_and_withdrawal_period: benjin, 
        interest: lixi,
        flag: false
      });
    }
  }
)

