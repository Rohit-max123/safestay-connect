actor {
  type PlanMetadata = {
    title : Text;
    lastUpdated : Int;
  };

  let metadata : PlanMetadata = {
    title = "SafeStay Connect Business Plan";
    lastUpdated = 1717598130117;
  };

  public query ({ caller }) func getPlanMetadata() : async PlanMetadata {
    metadata;
  };
};
