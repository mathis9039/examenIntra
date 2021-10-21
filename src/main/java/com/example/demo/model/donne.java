package com.example.demo.model;
import lombok.Data;

import java.sql.SQLOutput;

@Data
public class donne {
    public static void main(String args[]){
        int min = 1;
        int max = 6;
        String name;
        int guess;
        int randomNumber = (int)Math.floor(Math.random()*(max-min +1)+min);
        System.out.print(randomNumber);
    }
}
