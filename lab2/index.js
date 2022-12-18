function basket() {
    function Basket(IDCustomer) {
        this.countProduct = 0;
        this.product = new Map();
        this.IdCustomer = IDCustomer;
        this.Getcount = function(idP) {
            let i = 1 , num = 1 + this.countProduct
            this.product.forEach((val,key) => {
                if(idP == key) 
                    num = i
                i++
            })
            return num  
        }
        this.setBasket = function(idP , qty) {
            if(this.product.has(idP))
                this.product.set(idP , this.product.get(idP) + qty)
            else {
                this.countProduct++
                this.product.set(idP , qty)
            }
            return this.product.get(idP)
        }
    }
    
    var IDCustomer = prompt('รหัสลูกค้า')
    var basketSelect = new Basket(IDCustomer)
    var countLoop = 0
    do{
        try {
            let IDProduct = parseInt(prompt('รหัสสินค้า'));
            if(isNaN(IDProduct) || IDProduct == 0) throw('')
            let qtyProduct = parseInt(prompt('จำนวนสินค้า'))
            if(isNaN(qtyProduct) || qtyProduct == 0) throw('')
            countLoop = basketSelect.Getcount(IDProduct)
            console.log("รหัสลูกค้า "+IDCustomer+" - ลำดับรายการ "+countLoop+" - รหัสสินค้า "+IDProduct+", จำนวนสินค้า = "+basketSelect.setBasket(IDProduct , qtyProduct)+" ชิ้น" )
        } catch(e) {
            alert(e)
            alert('กรุณากรอกข้อมูลให้ถูกต้อง')
        }
    } while(countLoop <= 2)
}

basket()