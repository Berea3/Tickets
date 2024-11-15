package com.tickets.ai;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
public class AiRest {

    @Autowired
    private ChatModel chatModel;

//    @Autowired
//    private CaseRepository caseRepository;
//
//    @GetMapping("/ai/summarize-case/{id}/{date1}/{date2}")
//    public String aiSummarizeCase(@PathVariable String id, @PathVariable LocalDate date1, @PathVariable LocalDate date2)
//    {
//        List<Report> caseReports=caseRepository.findById(id).get().getReports();
//        ArrayList<Report> reports=new ArrayList<>();
//        for (int i=0;i<caseReports.size();i++)
//        {
//            Report report=caseReports.get(i);
//            if (report.getReportDate().isAfter(date1) && report.getReportDate().isBefore(date2)) reports.add(report);
//        }
//        String message;
//        message="Summarize this text:";
//        for (int i=0;i< reports.size();i++)
//        {
//            message=message+reports.get(i).getReportDescription();
//        }
//        return chatModel.call(message);
//    }

    @GetMapping("/ai")
    public String aiSummarizeCase(@RequestBody Message message)
    {
        return chatModel.call(message.message);
    }
}
