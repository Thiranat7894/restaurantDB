const sql = require("./db");
//Constructor
const Restaurant = function (restaurant) {
    //Attributes
    this.name = restaurant.name;
    this.type = restaurant.type;
    this.imageurl = restaurant.imageurl;
};

//Methods
Restaurant.create = (newRestaurant, result) => {
    //INSERT INTO restaurant SET name, type, imageurl, VALUES ("KFC", "Fastfood", "null")
    sql.query("INSERT INTO restaurant SET ?", newRestaurant, (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มี error
        console.log("new restaurant created");
        result(null, {
            id: res.id,
            ...newRestaurant
        });
    });
};

//Get all restaurant
Restaurant.getAll = (result) => {
    //SELECT * FROM restaurants
    sql.query("SELECT * FROM restaurant", (err, res) => {
        //มี error เกิดขึ้น
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        //ไม่มี error
        console.log("get all restaurant");
        result(null, res);
    });
};

//Get ById restaurant
Restaurant.getById = (restaurantsId, result) => {
    //SELECT * From restaurant WHERE id = restaurantId
    sql.query(`SELECT * From restaurant WHERE id = $(restaurantId)`,
        (err, res) => {
            //มี error เกิดขึ้น
            if (err) {
                console.log("err", err);
                result(err, null);
                return;
            }
            //found 1 row
            console.log("get restaurant by Id");
            if (res.length) {
                result(null, res[0]);
                return;
            }
            //not found
            result({
                kind: "not_found"
            }, null);
        }
    );
};

//update restaurant by id
restaurant.updateById = (id, restaurant, result) => {
    //UPDATE `restaurant` SET "name","type","imageurl" WHERE id = "id"
    sql.query("UPDATE restaurant SET name = ?,type = ?,imageurl = ? WHERE id = ?",
        [restaurant.name, restaurant.type, restaurant.imageurl, id],
        (err, res) => {
            if (err) {
                result(err, null)
                return;
            }
            if (res.affectedRows == 0) {
                result({
                    kind: "not_found"
                }, null)
                return;
            }
            //restaurant update
            result(null, {
                id: id,
                ...restaurant
            })
        });
}


restaurant.deleteById = (id, result) => {
    sql.query("DELETE FROM restaurant WHERE id = ?", id, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            result({
                kind: "not_found"
            }, null);
        }

        console.log("restaurant id " + restaurant + " is daleted");
        result(null, res);
    });
}

module.exports = Restaurant;