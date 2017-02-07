package com.cuttable.api.domain;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "account_role")
public class AccountRole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Account account;

    @Enumerated(EnumType.STRING)
    private RoleType role;

}
