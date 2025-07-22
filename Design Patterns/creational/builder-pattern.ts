/** Builder pattern is as design pattern while allows seperation of object creation and represention
 *  so the same construction process can create different representations
 * 
 *  In simpler words 
 *      - step by step object creation
 *      - reuse the same builder to create different versions / configurations of the object
 *      
 */

/** the builder will build this object */
class UserProfile {
    constructor(public name?: string, public age?: string, public phone?: string, public email?: string) { }
}



class UserProfileBuilder {
    private userProfile: UserProfile;
    constructor() {
        this.userProfile = new UserProfile;
    }

    setName(name: string) {
        this.userProfile.name = name;
        return this;
    }

    setAge(age: string) {
        this.userProfile.age = age;
        return this;

    }

    setPhone(phone: string) {
        this.userProfile.phone = phone;
        return this;

    }

    setEmail(email: string) {
        this.userProfile.email = email;
        return this;

    }

    build() {
        return this.userProfile;
    }
}

/** usage */

const builder = new UserProfileBuilder();

const user1 = builder.setName("a").setAge("3").setEmail("flsdjif@rer.com").setPhone("32344").build()