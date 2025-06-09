package com.tickets.entities.generator;

import java.time.LocalTime;
import java.util.Random;

public class Generator {

    public static String generateId()
    {
        StringBuilder s=new StringBuilder();
        s.append("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");

        LocalTime localTime=LocalTime.now();
        Random random=new Random();

        StringBuilder id=new StringBuilder();

        int x;
        for (int i=0;i<32;i++)
        {
            x=Math.abs(random.nextInt()%s.length());
            id.append(s.charAt(x));
        }

        return id.toString();
    }
}
