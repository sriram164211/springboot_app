package com.kasyap.springbootapp.model;

public class User {
    private String name;
    private String gender;
    private String imgUrl;

   public User(String name, String gender, String imgUrl){
        this.name = name;
        this.gender = gender;
        this.imgUrl =imgUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

}
