//I'm sorry. I tried my best, but I really didn't get what the author is asking me to do. I'd probably come back to this topic later on.



//Author's Solution:
    //The trick is that 'require' adds the interface object for a module to its 'cache' before it starts loading the module. That way, if any require call made while it is running tries to load it, it is already known, and the current interface will be returned, rather than starting to load the module once more (which would eventually overflow the stack).