# Editing books

```gherkin {all|1,10|2-5|7-8|11|12|13}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


```

---
transition: fade
---

```php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    // [...]
}
```

---

```php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->createPage->open();
    }
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->updatePage->open(['id' => $book->getId()]);
    }
    
    // [...]
}
```

---
transition: fade
---

```php {18-19}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
    ) {
    }

    /**
     * @Given there is (also) a book with name :name
     */
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
    }
}
```

---

```php {22|7}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private SharedStorageInterface $sharedStorage,
    ) {
    }

    /**
     * @Given there is (also) a book with name :name
     */
    public function thereIsABookWithName(string $name): void
    {
        $book = new Book();
        $book->setName($name);

        $this->entityManager->persist($book);
        $this->entityManager->flush();
        
        $this->sharedStorage->set('book', $book);
    }
}
```

---

```php {all|3|5|17-23|18|20|22}
// tests/Behat/Context/Transform/SharedStorageContext.php

final class SharedStorageContext implements Context
{
    public function __construct(private SharedStorageInterface $sharedStorage)
    {
    }

    /**
     * @Transform /^(it|its|theirs|them)$/
     */
    public function getLatestResource(): mixed
    {
        return $this->sharedStorage->getLatestResource();
    }

    /**
     * @Transform /^(?:this|that|the) ([^"]+)$/
     */
    public function getResource($resource): mixed
    {
        return $this->sharedStorage->get(StringInflector::nameToCode($resource));
    }
}

```

---

# Editing books

```gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


```

---
transition: fade
---


```php {7-11}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    // [...]
}
```

---

```php {13-17|13|14|16}
// tests/Behat/Context/Ui/Backend/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        $this->createPage->nameIt($name);
    }
    
    #[When('I change its name to :name')]
    public function iChangeItsNameTo(string $name): void
    {
        $this->updatePage->nameIt($name);
    }
    
    // [...]
}
```
