package com.cuttable.api.repository;

import com.cuttable.api.domain.Account;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<Account, Long> {

    Account findOneByEmail(String email);

}
